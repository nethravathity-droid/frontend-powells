import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "12px", background: "#444", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 8px", color: "#fff" }}>Home</Link>
      <Link to="/products" style={{ margin: "0 8px", color: "#fff" }}>Products</Link>
      <Link to="/about" style={{ margin: "0 8px", color: "#fff" }}>About</Link>
      <Link to="/contact" style={{ margin: "0 8px", color: "#fff" }}>Contact</Link>
      <Link to="/chat" style={{ margin: "0 8px", color: "#fff" }}>AI Chat</Link>
    </nav>
  );
}
