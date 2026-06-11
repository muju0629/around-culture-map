import {
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { events, formatDateRange } from "../data/events";

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

const GREETING: Message = {
  role: "assistant",
  content:
    "안녕하세요, AROUND 문화 큐레이터예요. 원하는 날짜, 지역, 가격과 문화 유형을 말해주세요.",
};

const SUGGESTIONS = [
  "이번 주말 전시 추천해줘",
  "곧 열리는 내한 공연 알려줘",
  "종로에서 볼 전시가 있어?",
];

function eventsByIds(ids: string[] = []) {
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
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "streaming" | "error"
  >("idle");
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const pendingRef = useRef(false);
  const isPending = status === "loading" || status === "streaming";

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
          content:
            "죄송해요, 지금 답을 가져오지 못했어요. 잠시 후 다시 시도해주세요.",
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
          aria-label="큐레이터 챗봇 열기"
        >
          ASK
        </button>
      )}

      {open && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label="문화 큐레이터"
        >
          <div className="chat-panel__header">
            <div>
              <span className="eyebrow">AROUND / CURATOR</span>
              <strong>무엇을 찾으세요?</strong>
            </div>
            <button
              type="button"
              className="chat-panel__close"
              onClick={() => setOpen(false)}
              aria-label="큐레이터 챗봇 닫기"
            >
              닫기
            </button>
          </div>

          <div className="chat-log" ref={logRef}>
            {messages.map((message, index) => {
              const cards =
                message.role === "assistant"
                  ? eventsByIds(message.eventIds)
                  : [];
              return (
                <div
                  key={index}
                  className={`chat-msg chat-msg--${message.role}`}
                >
                  <p>{message.content}</p>
                  {index === 0 && messages.length === 1 && (
                    <div className="chat-suggestions" aria-label="추천 질문">
                      {SUGGESTIONS.map((suggestion) => (
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
                              {event.category} · {event.sourceLabel}
                            </span>
                            <strong>{event.title}</strong>
                            <span className="chat-card__meta">
                              {event.venue} ·{" "}
                              {formatDateRange(event.startDate, event.endDate)}
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
                <p className="chat-typing">공식 행사에서 찾는 중…</p>
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              value={input}
              maxLength={800}
              onChange={(event) => setInput(event.target.value)}
              placeholder="예: 이번 주말 종로 전시"
              aria-label="메시지 입력"
            />
            <button type="submit" disabled={isPending || !input.trim()}>
              보내기
            </button>
          </form>
        </div>
      )}
    </>
  );
}
