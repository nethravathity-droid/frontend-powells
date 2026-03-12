import "./Whatsapp.css";

export default function WhatsApp() {
  // Replace with your company WhatsApp number
  const phoneNumber = "919148243088";

  // Pre-filled message
  const message =
    "Hello Powells India Corporation, I am interested in your electrical products. Please share more details.";

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
