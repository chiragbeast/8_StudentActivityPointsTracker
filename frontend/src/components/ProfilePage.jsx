import { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import api from '../api';
import './ProfilePage.css';

export default function ProfilePage() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [profile, setProfile] = useState(null);
    const [notifications, setNotifications] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await api.get('/student/profile');
                setProfile(res.data);
                setNotifications(res.data.notificationsEnabled);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load profile", err);
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Save changes', { currentPassword, newPassword, confirmPassword, notifications });
    };

    const handleDiscard = () => {
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    if (loading) return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading profile...</div>;

    const userObj = profile || JSON.parse(localStorage.getItem('user') || '{}');

    return (
        <div className="profile-page">
            {/* Header */}
            <div className="profile-header">
                <h1 className="profile-page-title">Student Profile & Settings</h1>
                <p className="profile-page-subtitle">Manage your personal information and account security.</p>
            </div>

            <div className="profile-grid">
                {/* Left: Profile Card */}
                <div className="profile-card">
                    <div className="avatar-wrapper">
                        <div className="avatar-circle">
                            <span className="avatar-letter">{userObj.name?.charAt(0) || 'U'}</span>
                        </div>
                    </div>
                    <h2 className="profile-name">{userObj.name}</h2>
                    <p className="profile-roll">Roll Number: {userObj.rollNumber || 'N/A'}</p>
                    <p className="profile-email">{userObj.email}</p>

                    <button className="change-pic-btn">Change Profile Picture</button>

                    <div className="completion-section">
                        <div className="completion-header">
                            <span className="completion-label">Active Status</span>
                            <span className="completion-value">Verified</span>
                        </div>
                        <div className="completion-track">
                            <div className="completion-fill" style={{ width: '100%', backgroundColor: '#10b981' }} />
                        </div>
                    </div>
                </div>

                {/* Right column */}
                <div className="profile-right">
                    {/* Account Settings */}
                    <div className="settings-card">
                        <h2 className="settings-heading">Account Settings</h2>

                        <h3 className="settings-subheading">Update Password</h3>
                        <p className="settings-desc">Ensure your account is using a long, random password to stay secure.</p>

                        <form onSubmit={handleSave}>
                            <label className="prof-field-label">Current Password</label>
                            <div className="prof-input-wrapper">
                                <input
                                    type={showCurrent ? 'text' : 'password'}
                                    className="prof-field-input"
                                    placeholder="••••••••••"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                                <button type="button" className="prof-toggle-pw" onClick={() => setShowCurrent(!showCurrent)}>
                                    {showCurrent ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>

                            <div className="password-row">
                                <div className="password-col">
                                    <label className="prof-field-label">New Password</label>
                                    <div className="prof-input-wrapper">
                                        <input
                                            type={showNew ? 'text' : 'password'}
                                            className="prof-field-input"
                                            placeholder="••••••••••"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                        <button type="button" className="prof-toggle-pw" onClick={() => setShowNew(!showNew)}>
                                            {showNew ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                    </div>
                                </div>
                                <div className="password-col">
                                    <label className="prof-field-label">Confirm Password</label>
                                    <div className="prof-input-wrapper">
                                        <input
                                            type={showConfirm ? 'text' : 'password'}
                                            className="prof-field-input"
                                            placeholder="••••••••••"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <button type="button" className="prof-toggle-pw" onClick={() => setShowConfirm(!showConfirm)}>
                                            {showConfirm ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="settings-actions">
                                <button type="button" className="discard-btn" onClick={handleDiscard}>Discard</button>
                                <button type="submit" className="save-btn">Save Changes</button>
                            </div>
                        </form>
                    </div>

                    {/* Notifications */}
                    <div className="settings-card">
                        <h2 className="settings-heading">Notifications</h2>
                        <div className="notif-row">
                            <div>
                                <h3 className="settings-subheading" style={{ margin: 0 }}>Notification Preferences</h3>
                                <p className="settings-desc" style={{ margin: '4px 0 0' }}>Stay updated with important activity alerts and system announcements.</p>
                            </div>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={notifications}
                                    onChange={(e) => setNotifications(e.target.checked)}
                                />
                                <span className="toggle-slider" />
                                <span className="toggle-label">Receive system notifications</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="profile-footer">
                <span>© 2024 Student Activity Tracker. All rights reserved.</span>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Help Center</a>
                </div>
            </footer>
        </div>
    );
}
