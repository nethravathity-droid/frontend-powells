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
  ? "http://localhost:5000/api/auth/register" // Change 5000 to your backend port
  : "http://localhost:5000/api/auth/login";
  
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
