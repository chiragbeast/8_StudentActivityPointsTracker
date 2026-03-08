import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineUser, HiOutlineIdentification, HiOutlineAcademicCap } from 'react-icons/hi';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import api from '../api';
import './LoginPage.css'; // Reusing styling from login page

const ROLES = ['Student', 'Faculty', 'Admin'];

export default function RegisterPage() {
    const navigate = useNavigate();
    const [activeRole, setActiveRole] = useState('Student');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [department, setDepartment] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await api.post('/auth/register', {
                name,
                email,
                password,
                role: activeRole,
                rollNumber: activeRole === 'Student' && rollNumber.trim() ? rollNumber.trim() : undefined,
                department: department.trim() ? department.trim() : undefined
            });

            // Store token and user data
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));

            navigate('/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to register');
        }
    };

    return (
        <div className="login-page">
            <main className="login-content" style={{ paddingTop: '70px', paddingBottom: '32px' }}>
                <h1 className="login-title">Create Account</h1>
                <p className="login-subtitle">Sign up to get started with the portal.</p>

                {error && <div className="error-message" style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                {/* Role tabs */}
                <div className="role-tabs">
                    {ROLES.map((role) => (
                        <button
                            key={role}
                            className={`role-tab ${activeRole === role ? 'active' : ''}`}
                            onClick={() => setActiveRole(role)}
                            type="button"
                        >
                            {role}
                        </button>
                    ))}
                </div>

                {/* Form */}
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '16px' }}>
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <div className="input-wrapper">
                            <HiOutlineUser className="input-icon" />
                            <input
                                id="name"
                                type="text"
                                className="form-input"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '16px' }}>
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-wrapper">
                            <HiOutlineMail className="input-icon" />
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {(activeRole === 'Student' || activeRole === 'Faculty') && (
                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label htmlFor="department" className="form-label">Department</label>
                            <div className="input-wrapper">
                                <HiOutlineAcademicCap className="input-icon" />
                                <input
                                    id="department"
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g., Computer Science"
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    {activeRole === 'Student' && (
                        <div className="form-group" style={{ marginBottom: '16px' }}>
                            <label htmlFor="rollNumber" className="form-label">Roll Number</label>
                            <div className="input-wrapper">
                                <HiOutlineIdentification className="input-icon" />
                                <input
                                    id="rollNumber"
                                    type="text"
                                    className="form-input"
                                    placeholder="e.g., B230652CS"
                                    value={rollNumber}
                                    onChange={(e) => setRollNumber(e.target.value)}
                                />
                            </div>
                        </div>
                    )}

                    <div className="form-group" style={{ marginBottom: '16px' }}>
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-wrapper">
                            <FiLock className="input-icon" />
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                className="form-input"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="login-btn" style={{ marginTop: '16px' }}>Sign Up</button>
                </form>

                <p className="signup-prompt">
                    Already have an account?{' '}
                    <Link to="/" className="request-link">Log In</Link>
                </p>
            </main>
        </div>
    );
}
