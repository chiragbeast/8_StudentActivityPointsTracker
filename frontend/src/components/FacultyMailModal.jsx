import React, { useState } from 'react';
import styles from './FacultyMailModal.module.css';
import { X, Send } from 'lucide-react';

export default function MailModal({ isOpen, onClose, studentName }) {
    const [reason, setReason] = useState('points');

    if (!isOpen) return null;

    const handleSend = () => {
        const reasonText = reason === 'points' ? "Mail Regarding Total Semester Points" : "Meeting with FA";
        alert(`Email sent to ${studentName} for: ${reasonText}`);
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h3>Send Mail to {studentName}</h3>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className={styles.content}>
                    <p className={styles.label}>Choose a reason for sending mail:</p>
                    <div className={styles.selectWrapper}>
                        <select
                            className={styles.dropdown}
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                        >
                            <option value="points">Mail Regarding Total Semester Points</option>
                            <option value="meeting">Meeting with FA</option>
                        </select>
                    </div>
                </div>

                <div className={styles.footer}>
                    <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
                    <button className={styles.sendBtn} onClick={handleSend}>
                        <Send size={16} />
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
