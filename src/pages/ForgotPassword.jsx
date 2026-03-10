import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/password/forgot', { email });
      setMessage('Reset link sent to your email');
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || 'Error sending reset link');
      setMessage("");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Forgot Password</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {message && <p style={{ color: 'green' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className="auth-btn" type="submit">
            Send Reset Link
          </button>
        </form>

        <div className="auth-link">
          <a onClick={() => navigate("/")}>
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
}