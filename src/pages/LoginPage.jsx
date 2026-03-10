import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

const ROLES = ["Student", "Faculty", "Admin"];

export default function LoginPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [activeRole, setActiveRole] = useState("Student");
  const [error, setError] = useState("");

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard'); // or wherever after login
    }
  }, [searchParams, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Welcome Back</h1>

        <div style={{ display: "flex", marginBottom: "20px" }}>
          {ROLES.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              style={{
                flex: 1,
                padding: "10px",
                background:
                  activeRole === role ? "#FFFFFF" : "#F1F1F1",
                border: "none",
                cursor: "pointer",
                fontWeight: activeRole === role ? "600" : "500"
              }}
            >
              {role}
            </button>
          ))}
        </div>

        <form onSubmit={handleLogin}>
          <input
            className="auth-input"
            name="email"
            placeholder="ID / Email"
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

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button className="auth-btn" type="submit">Login</button>
        </form>

        <button className="auth-btn" onClick={handleGoogleLogin} style={{ background: '#4285F4', marginTop: '10px' }}>
          Sign in with Google
        </button>

        <div className="auth-link">
          <a onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </a>
        </div>

        <div className="auth-link">
          Don't have an account?{" "}
          <a onClick={() => navigate("/register")}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
}