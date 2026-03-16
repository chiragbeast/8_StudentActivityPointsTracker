import React, { useState } from 'react'
import { facultyApi } from '../services/api'
import styles from './FacultyMailModal.module.css'
import { X, Send } from 'lucide-react'

export default function MailModal({ isOpen, onClose, studentId, studentName, studentEmail }) {
  const [reason, setReason] = useState('points')

  if (!isOpen) return null

  const handleSend = async () => {
    if (!studentEmail || studentEmail === 'N/A') {
      alert('No valid email found for this student.')
      return
    }

    try {
      // Trigger system notification for the student
      if (studentId) {
        await facultyApi.notifyEmail(studentId, reason)
      }
    } catch (err) {
      console.error('Failed to send system notification:', err)
      // We continue anyway so the Gmail compose opens even if internal notification fails
    }

    const reasonText =
      reason === 'points' ? 'Mail Regarding Total Semester Points' : 'Meeting with FA'
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(studentEmail)}&su=${encodeURIComponent(reasonText)}`

    // Open in a centered popup window
    const width = 800
    const height = 650
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2

    window.open(
      gmailUrl,
      'Compose Mail',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=yes`
    )

    onClose()
  }

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
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.sendBtn} onClick={handleSend}>
            <Send size={16} />
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
