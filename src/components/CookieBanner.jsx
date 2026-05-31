import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookiesAccepted");
    if (stored === "true") setAccepted(true);
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookiesAccepted", "true");
    setAccepted(true);
  }

  if (accepted) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      background: "#333",
      color: "#fff",
      padding: "12px",
      textAlign: "center"
    }}>
      We use cookies to improve your experience.
      <button
        onClick={acceptCookies}
        style={{
          marginLeft: "10px",
          padding: "5px 12px",
          background: "#4CAF50",
          color: "#fff",
          border: "none",
          cursor: "pointer"
        }}
      >
        Accept
      </button>
    </div>
  );
}
