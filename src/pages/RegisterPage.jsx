import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const ROLES = ["Student", "Faculty", "Admin"];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "Student" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>

        <form onSubmit={handleRegister}>
          <input
            className="auth-input"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="auth-input"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <select
            className="auth-input"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            {ROLES.map(role => <option key={role} value={role}>{role}</option>)}
          </select>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className="auth-btn" type="submit">Register</button>
        </form>

        <div className="auth-link">
          Already have an account?{" "}
          <a onClick={() => navigate("/")}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}