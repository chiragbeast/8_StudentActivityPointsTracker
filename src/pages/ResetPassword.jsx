import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post(`http://localhost:5000/api/password/reset/${token}`, { password: formData.password });
      setMessage('Password reset successful');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error resetting password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Reset Password</h1>

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            className="auth-input"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {message && <p style={{ color: 'green' }}>{message}</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className="auth-btn" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}