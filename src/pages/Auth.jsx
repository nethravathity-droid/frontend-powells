/*import { useState } from "react";
import "./Auth.css";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // Local storage simulation (State is preserved during the session)
  const [users, setUsers] = useState([
    { email: "test@gmail.com", password: "Test@1234", name: "Test User", phone: "123456789012" },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage(""); // Clear error when user types
  };

  // VALIDATION LOGIC
  const validateName = (name) => /^[A-Za-z ]+$/.test(name);
  const validatePhone = (phone) => /^[0-9]{12}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);

  const handleRegister = () => {
    const { name, phone, email, password } = form;

    if (!validateName(name)) return setMessage("Name should contain only letters.");
    if (!validatePhone(phone)) return setMessage("Phone number must be exactly 12 digits.");
    if (!validateEmail(email)) return setMessage("Enter a valid email address.");
    if (!validatePassword(password)) {
      return setMessage("Password must be 8+ chars with uppercase, lowercase, number & special char.");
    }

    if (users.find((u) => u.email === email)) {
      return setMessage("Account already exists. Please login.");
    }

    setUsers([...users, form]);
    setMessage("Registration successful! Switching to login...");
    
    setTimeout(() => {
      setIsLogin(true);
      setMessage("");
    }, 1500);
  };

  const handleLogin = () => {
    const { email, password } = form;
    const user = users.find((u) => u.email === email);

    if (!user) return setMessage("Account does not exist. Please register.");
    if (user.password !== password) return setMessage("Email or password is incorrect.");

    setMessage(`Welcome , ${user.name || "User"}!`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ marginBottom: "20px" }}>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <>
            <input
              style={styles.input}
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              style={styles.input}
              name="phone"
              placeholder="Phone (12 digits)"
              value={form.phone}
              onChange={handleChange}
            />
          </>
        )}

        <input
          style={styles.input}
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        {message && <p style={styles.message}>{message}</p>}

        <button
          style={styles.button}
          onClick={isLogin ? handleLogin : handleRegister}
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          style={styles.switch}
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage("");
          }}
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

// Merged Styles
const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0b1a35",
    
    fontFamily: "sans-serif"
    
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    width: "320px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box" // Prevents padding from breaking width
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    fontWeight: "bold"
  },
  message: {
    color: "#d32f2f",
    fontSize: "14px",
    marginTop: "8px",
  },
  switch: {
    marginTop: "15px",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline"
  },
};*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Auth() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(true);
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

    if (isRegister && !nameRegex.test(form.name)) {
      return "Name should contain only letters";
    }

    if (isRegister && !phoneRegex.test(form.phone)) {
      return "Phone number must be 10 digits";
    }

    if (!emailRegex.test(form.email)) {
      return "Enter valid email";
    }

    if (!passwordRegex.test(form.password)) {
      return "Password must be 8+ chars with 1 capital letter";
    }

    return null;
  };

  const submit = async () => {
    const error = validate();
    if (error) {
      setMsg(error);
      return;
    }

    const url = isRegister
      ? "https://powells-backend-1.onrender.com/api/auth/register"
      : "https://powells-backend-1.onrender.com/api/auth/login";

    const body = isRegister
      ? form
      : { email: form.email, password: form.password };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    setMsg(data.message);

    if (res.ok && !isRegister) {
      localStorage.setItem("token", data.token);
      navigate("/");
    }

    if (res.ok && isRegister) setIsRegister(false);
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>{isRegister ? "Create Account" : "Login"}</h2>

        {msg && <p className="auth-msg">{msg}</p>}

        {isRegister && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              onChange={change}
            />
            <input
              name="phone"
              placeholder="10 digit phone"
              onChange={change}
            />
          </>
        )}

        <input
          name="email"
          placeholder="Email"
          onChange={change}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={change}
        />

        <button onClick={submit}>
          {isRegister ? "Register" : "Login"}
        </button>

        <p
          className="auth-switch"
          onClick={() => {
            setMsg("");
            setIsRegister(!isRegister);
          }}
        >
          {isRegister ? "Already have an account? Login" : "Create new account"}
        </p>
      </div>
    </div>
  );
}
