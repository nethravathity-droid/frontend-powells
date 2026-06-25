import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import "./Chatbot.css";
import {
  companyInfo,
  quickActions,
  getAssistantResponse,
  resolveSuggestion,
} from "../data/chatKnowledge";

const WELCOME = {
  from: "bot",
  text: `Welcome to ${companyInfo.name}! 👋\n\nI'm your manufacturing assistant. Ask me about our electrical products, ATS systems, energy meters, switchgear, quotations, or contact details.`,
  suggestions: quickActions.map((a) => a.label),
};

export default function Chatbot() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const addBotReply = (response) => {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: response.text,
          link: response.link || null,
          suggestions: response.suggestions || null,
        },
      ]);
    }, 600);
  };

  const handleSend = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    addBotReply(getAssistantResponse(trimmed));
  };

  const handleSuggestion = (label) => {
    setMessages((prev) => [...prev, { from: "user", text: label }]);
    addBotReply(resolveSuggestion(label));
  };

  const handleLink = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      <button
        type="button"
        className={`chatbot-fab ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close assistant" : "Open Powells assistant"}
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
        {!open && <span className="chatbot-fab-pulse" />}
      </button>

      {open && (
        <div className="chatbot-window" role="dialog" aria-label="Powells assistant chat">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <Bot size={20} />
              </div>
              <div>
                <strong>Powells Assistant</strong>
                <span>Manufacturing &amp; Product Expert</span>
              </div>
            </div>
            <button type="button" className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close">
              <X size={18} />
            </button>
          </div>

          <div className="chatbot-body" ref={bodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatbot-msg-row ${msg.from}`}>
                <div className="chatbot-msg-icon">
                  {msg.from === "bot" ? <Bot size={14} /> : <User size={14} />}
                </div>
                <div className="chatbot-msg-content">
                  <div className={`chatbot-msg ${msg.from}`}>
                    {msg.text.split("\n").map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>

                  {msg.link && (
                    <button
                      type="button"
                      className="chatbot-link-btn"
                      onClick={() => handleLink(msg.link.path)}
                    >
                      {msg.link.label} →
                    </button>
                  )}

                  {msg.suggestions && (
                    <div className="chatbot-suggestions">
                      {msg.suggestions.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className="chatbot-chip"
                          onClick={() => handleSuggestion(s)}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="chatbot-msg-row bot">
                <div className="chatbot-msg-icon"><Bot size={14} /></div>
                <div className="chatbot-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>

          <div className="chatbot-quick-bar">
            {quickActions.slice(0, 3).map((a) => (
              <button
                key={a.label}
                type="button"
                className="chatbot-quick-chip"
                onClick={() => handleSuggestion(a.label)}
              >
                {a.label}
              </button>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about products, ATS, quotation..."
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              aria-label="Chat message"
            />
            <button type="button" onClick={() => handleSend(input)} aria-label="Send">
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
