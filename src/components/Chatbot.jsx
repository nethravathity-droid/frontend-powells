import { useState } from "react";
import "./Chatbot.css";
import { faqData } from "../data/faqData";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botMsg = {
      from: "bot",
      text: "Thanks for your query. Our team will get back to you shortly."
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Powells AI Assistant</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}
