import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Fill all fields");
      return;
    }

    try {
      // ✅ Use your Vercel backend URL here
      const response = await fetch("https://habit-forge-by-om.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();

      if (response.ok) {
        alert("User Registered Successfully");
        navigate("/");
      } else {
        alert(data.message || "Registration failed");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="title">Create Account</h1>
      <p className="subtitle">Start building better habits</p>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn"
          type="submit"
        >
          Create Account
        </motion.button>
      </form>

      <p className="switch">
        Already have account? <Link to="/">Login</Link>
      </p>
    </motion.div>
  );
}