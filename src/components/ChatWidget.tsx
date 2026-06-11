import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  formatDateRange,
  getCategoryLabel,
  getEvents,
} from "../data/events";
import { useLanguage } from "../i18n/language";

interface Message {
  role: "user" | "assistant";
  content: string;
  eventIds?: string[];
}

interface StreamMessage {
  type: "meta" | "delta";
  eventIds?: string[];
  content?: string;
}

function eventsByIds(
  events: ReturnType<typeof getEvents>,
  ids: string[] = [],
) {
  const order = new Map(ids.map((id, index) => [id, index]));
  return events
    .filter((event) => order.has(event.id))
    .sort(
      (a, b) =>
        (order.get(a.id) ?? Number.MAX_SAFE_INTEGER) -
        (order.get(b.id) ?? Number.MAX_SAFE_INTEGER),
    );
}

export function ChatWidget() {
  const { locale, copy } = useLanguage();
  const localizedEvents = getEvents(locale);
  const greetingContent = copy.chat.greeting;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: greetingContent },
  ]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "streaming" | "error"
  >("idle");
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingRef = useRef(false);
  const isPending = status === "loading" || status === "streaming";

  useEffect(() => {
    setMessages([{ role: "assistant", content: greetingContent }]);
    setInput("");
    setStatus("idle");
    pendingRef.current = false;
  }, [greetingContent, locale]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, open, status]);

  useEffect(() => {
    if (!open) {
      return;
    }
    inputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || pendingRef.current) {
      return;
    }

    pendingRef.current = true;
    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setStatus("loading");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          locale,
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });
      if (!response.ok || !response.body) {
        throw new Error("chat failed");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let answer = "";
      let eventIds: string[] = [];
      let assistantAdded = false;

      function updateAssistant() {
        if (!assistantAdded) {
          assistantAdded = true;
          setMessages((current) => [
            ...current,
            { role: "assistant", content: answer, eventIds },
          ]);
          return;
        }

        setMessages((current) => {
          const copy = current.slice();
          copy[copy.length - 1] = {
            role: "assistant",
            content: answer,
            eventIds,
          };
          return copy;
        });
      }

      function processLine(line: string) {
        if (!line.trim()) return;
        const payload = JSON.parse(line) as StreamMessage;
        if (payload.type === "meta" && Array.isArray(payload.eventIds)) {
          eventIds = payload.eventIds;
          if (assistantAdded) updateAssistant();
        }
        if (payload.type === "delta" && typeof payload.content === "string") {
          answer += payload.content;
          setStatus("streaming");
          updateAssistant();
        }
      }

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        lines.forEach(processLine);
      }
      if (buffer.trim()) {
        processLine(buffer);
      }
      if (!assistantAdded || !answer) {
        throw new Error("empty stream");
      }
      setStatus("idle");
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: copy.chat.error,
        },
      ]);
      setStatus("error");
    } finally {
      pendingRef.current = false;
    }
  }

  function handleSubmit(formEvent: FormEvent) {
    formEvent.preventDefault();
    void sendMessage(input);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          className="chat-fab"
          onClick={() => setOpen(true)}
          aria-expanded="false"
          aria-label={copy.chat.open}
        >
          ASK
        </button>
      )}

      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label={copy.chat.dialog}
        >
          <div className="chat-panel__header">
            <div>
              <span className="eyebrow">AROUND / CURATOR</span>
              <strong>{copy.chat.heading}</strong>
            </div>
            <button
              type="button"
              className="chat-panel__close"
              onClick={() => setOpen(false)}
              aria-label={copy.chat.closeLabel}
            >
              {copy.chat.close}
            </button>
          </div>

          <div className="chat-log" ref={logRef}>
            {messages.map((message, index) => {
              const cards =
                message.role === "assistant"
                  ? eventsByIds(localizedEvents, message.eventIds)
                  : [];
              return (
                <div
                  key={index}
                  className={`chat-msg chat-msg--${message.role}`}
                >
                  <p>{message.content}</p>
                  {index === 0 && messages.length === 1 && (
                    <div
                      className="chat-suggestions"
                      aria-label={copy.chat.suggestionLabel}
                    >
                      {copy.chat.suggestions.map((suggestion) => (
                        <button
                          type="button"
                          key={suggestion}
                          onClick={() => void sendMessage(suggestion)}
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                  {cards.length > 0 && (
                    <div className="chat-cards">
                      {cards.map((event) => (
                        <Link
                          key={event.id}
                          className="chat-card"
                          to={`/events/${event.id}`}
                          onClick={() => setOpen(false)}
                        >
                          {event.posterImage && (
                            <img src={event.posterImage} alt="" loading="lazy" />
                          )}
                          <span className="chat-card__body">
                            <span className="chat-card__cat">
                              {getCategoryLabel(event.category, locale)} ·{" "}
                              {event.sourceLabel}
                            </span>
                            <strong>{event.title}</strong>
                            <span className="chat-card__meta">
                              {event.venue} ·{" "}
                              {formatDateRange(
                                event.startDate,
                                event.endDate,
                                locale,
                              )}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {status === "loading" && (
              <div className="chat-msg chat-msg--assistant">
                <p className="chat-typing">{copy.chat.loading}</p>
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={input}
              maxLength={800}
              onChange={(event) => setInput(event.target.value)}
              placeholder={copy.chat.placeholder}
              aria-label={copy.chat.inputLabel}
            />
            <button type="submit" disabled={isPending || !input.trim()}>
              {copy.chat.send}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
