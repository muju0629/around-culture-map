import { type FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { events } from "../data/events";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content:
    '안녕하세요, AROUND 문화 큐레이터예요. 어떤 문화를 찾고 계세요?\n예: "주말에 친구랑 갈 무료 전시 추천해줘"',
};

function referencedEvents(text: string) {
  return events.filter((event) => text.includes(event.title));
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages, open, status]);

  async function handleSubmit(formEvent: FormEvent) {
    formEvent.preventDefault();
    const text = input.trim();
    if (!text || status === "loading") {
      return;
    }

    const nextMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(nextMessages);
    setInput("");
    setStatus("loading");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      if (!response.ok) {
        throw new Error("chat failed");
      }
      const data = (await response.json()) as { reply: string };
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.reply },
      ]);
      setStatus("idle");
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "죄송해요, 지금 답을 가져오지 못했어요. 잠시 후 다시 시도해주세요.",
        },
      ]);
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        className="chat-fab"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "큐레이터 챗봇 닫기" : "큐레이터 챗봇 열기"}
      >
        {open ? "✕" : "ASK"}
      </button>

      {open && (
        <div className="chat-panel" role="dialog" aria-label="문화 큐레이터">
          <div className="chat-panel__header">
            <span className="eyebrow">AROUND / CURATOR</span>
            <strong>무엇을 찾으세요?</strong>
          </div>

          <div className="chat-log" ref={logRef}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chat-msg chat-msg--${message.role}`}
              >
                <p>{message.content}</p>
                {message.role === "assistant" && (
                  <div className="chat-msg__links">
                    {referencedEvents(message.content).map((event) => (
                      <Link
                        key={event.id}
                        to={`/events/${event.id}`}
                        onClick={() => setOpen(false)}
                      >
                        {event.title} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {status === "loading" && (
              <div className="chat-msg chat-msg--assistant">
                <p className="chat-typing">답을 찾는 중…</p>
              </div>
            )}
          </div>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="메시지를 입력하세요"
              aria-label="메시지 입력"
            />
            <button
              type="submit"
              disabled={status === "loading" || !input.trim()}
            >
              보내기
            </button>
          </form>
        </div>
      )}
    </>
  );
}
