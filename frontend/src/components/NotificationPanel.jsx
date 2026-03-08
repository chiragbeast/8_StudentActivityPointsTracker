import { useState, useRef, useEffect } from 'react';
import { FiBell, FiCheck, FiX, FiEdit3, FiAlertCircle } from 'react-icons/fi';
import api from '../api';
import './NotificationPanel.css';

const ICON_MAP = {
    approved: FiCheck,
    rejected: FiX,
    modified: FiEdit3,
    info: FiAlertCircle,
    Draft: FiAlertCircle,
    Pending: FiAlertCircle,
    Approved: FiCheck,
    Denied: FiX,
    Returned: FiEdit3
};

export default function NotificationPanel() {
    const [open, setOpen] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const panelRef = useRef(null);

    const unreadCount = notifications.filter((n) => !n.isRead).length;

    useEffect(() => {
        fetchNotifications();
    }, []);

    const fetchNotifications = async () => {
        try {
            const res = await api.get('/notifications');
            setNotifications(res.data);
        } catch (error) {
            console.error("Failed to fetch notifications", error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const markAllRead = async () => {
        try {
            // Optimistically update UI
            setNotifications(notifications.map((n) => ({ ...n, isRead: true })));

            // In a real scenario, you'd likely want a backend endpoint to mark all as read
            // For now, we'll mark them individually if there are any unread
            const unread = notifications.filter((n) => !n.isRead);
            for (let n of unread) {
                await api.put(`/notifications/${n._id}/read`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const markRead = async (id) => {
        try {
            setNotifications(notifications.map((n) => (n._id === id ? { ...n, isRead: true } : n)));
            await api.put(`/notifications/${id}/read`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="notif-wrapper" ref={panelRef}>
            <button
                className="notification-btn"
                aria-label="Notifications"
                onClick={() => setOpen(!open)}
            >
                <FiBell />
                {unreadCount > 0 && <span className="notif-badge">{unreadCount}</span>}
            </button>

            {open && (
                <div className="notif-panel">
                    <div className="notif-panel-header">
                        <h3 className="notif-panel-title">Notifications</h3>
                        {unreadCount > 0 && (
                            <button className="notif-mark-all" onClick={markAllRead}>
                                Mark all as read
                            </button>
                        )}
                    </div>

                    <div className="notif-list">
                        {notifications.length === 0 ? (
                            <div style={{ padding: '1rem', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem' }}>No notifications</div>
                        ) : (
                            notifications.map((n) => {
                                const Icon = ICON_MAP[n.type] || FiAlertCircle;
                                return (
                                    <div
                                        key={n._id}
                                        className={`notif-item ${n.isRead ? '' : 'unread'}`}
                                        onClick={() => markRead(n._id)}
                                    >
                                        <div className={`notif-icon notif-icon-${(n.type || 'info').toLowerCase()}`}>
                                            <Icon />
                                        </div>
                                        <div className="notif-content">
                                            <p className="notif-message">{n.message}</p>
                                            <span className="notif-time">{new Date(n.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        {!n.isRead && <span className="notif-unread-dot" />}
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
