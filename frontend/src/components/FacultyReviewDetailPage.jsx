import { useState } from 'react'
import styles from './FacultyReviewDetailPage.module.css'

export default function ReviewDetailPage({ submission, onBack }) {
  const [approvedPoints, setApprovedPoints] = useState(
    submission?.points ?? 50
  )
  const [feedback, setFeedback] = useState('')
  const [status, setStatus] = useState(null) // null | 'approved' | 'rejected'

  const student = submission ?? {
    name: 'Alex Johnson',
    studentId: 'B230001CS',
    department: 'Computer Science Dept.',
    submittedOn: 'Oct 24, 2023',
    activity: 'National Coding Hackathon 2023',
    description:
      'Participated in a 48-hour intensive coding hackathon focused on developing AI-driven sustainability solutions. Our team developed "EcoTrack", a platform using computer vision to categorize waste in real-time.',
    category: 'Institute',
    fileName: 'Hackathon_Certificate_Alex_J.pdf',
    fileSize: '2.4 MB',
    points: 50,
    lastUpdated: 'Oct 25, 2023 10:45 AM',
  }

  const handleApprove = () => {
    setStatus('approved')
    setTimeout(() => onBack(), 1500)
  }
  const handleReject = () => {
    setStatus('rejected')
    setTimeout(() => onBack(), 1500)
  }

  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb}>
        <button className={styles.breadcrumbLink} onClick={onBack}>Submissions</button>
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
          <path d="M9 18l6-6-6-6" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className={styles.breadcrumbCurrent}>Review Detail</span>
      </nav>

      {status && (
        <div className={`${styles.toast} ${styles[status]}`}>
          {status === 'approved'
            ? '✅ Submission approved successfully!'
            : '❌ Submission has been rejected.'}
        </div>
      )}

      <div className={styles.layout}>
        {/* ── Left Column ── */}
        <div className={styles.left}>

          {/* Student Card */}
          <div className={styles.card}>
            <div className={styles.studentRow}>
              <div className={styles.studentAvatar}>
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="26" fill="#ddd" />
                  <circle cx="26" cy="20" r="9" fill="#bbb" />
                  <ellipse cx="26" cy="42" rx="14" ry="10" fill="#aaa" />
                </svg>
              </div>
              <div className={styles.studentInfo}>
                <h2 className={styles.studentName}>{student.name}</h2>
                <p className={styles.studentMeta}>
                  ID: {student.studentId} • {student.department}
                </p>
                <span className={styles.pendingBadge}>PENDING REVIEW</span>
              </div>
              <div className={styles.submittedOn}>
                <span className={styles.submittedLabel}>Submitted on</span>
                <span className={styles.submittedDate}>{student.submittedOn}</span>
              </div>
            </div>
          </div>

          {/* Activity Details Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#f5a623" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M14 2v6h6M8 13h8M8 17h5" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className={styles.cardTitle}>Activity Submission Details</h3>
            </div>

            <h4 className={styles.activityTitle}>{student.activity}</h4>
            <p className={styles.activityDesc}>{student.description}</p>

            <div className={styles.categoryBox}>
              <span className={styles.categoryLabel}>CATEGORY</span>
              <span className={`
                ${styles.categoryValue} 
                ${student.categoryType === 'department' ? styles.departmentText : ''}
                ${student.categoryType === 'institute' ? styles.instituteText : ''}
              `}>
                {student.category}
              </span>
            </div>

            {/* Proof Upload Area */}
            <div className={styles.proofBox}>
              <div className={styles.proofContent}>
                <div className={styles.pdfIcon}>
                  <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
                    <rect x="0" y="0" width="36" height="44" rx="4" fill="#e8ecf0" />
                    <rect x="4" y="4" width="36" height="44" rx="4" fill="#d0d8e0" />
                    <rect x="6" y="6" width="28" height="36" rx="3" fill="#fff" />
                    <text x="14" y="28" fontSize="10" fontWeight="700" fill="#5a7a9a" fontFamily="sans-serif">PDF</text>
                  </svg>
                </div>
                <p className={styles.fileName}>{student.fileName}</p>
                <p className={styles.fileSize}>{student.fileSize} • Preview not available for this format</p>
                <button className={styles.reviewProofBtn}>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Review Proof
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ── Right Column ── */}
        <div className={styles.right}>
          <div className={styles.card}>
            <h3 className={styles.evalTitle}>Point Evaluation</h3>

            <div className={styles.evalSection}>
              <label className={styles.evalLabel}>Requested Points</label>
              <p className={`
                ${styles.requestedPoints} 
                ${student.categoryType === 'department' ? styles.departmentText : ''}
                ${student.categoryType === 'institute' ? styles.instituteText : ''}
              `}>
                {student.points}.0
              </p>
            </div>

            <div className={styles.evalSection}>
              <label className={styles.evalLabel}>Approved Points</label>
              <div className={styles.pointsInputWrapper}>
                <select
                  className={styles.pointsDropdown}
                  value={approvedPoints}
                  onChange={e => setApprovedPoints(Number(e.target.value))}
                >
                  {[...Array((student.points || 50) + 1).keys()].map(val => (
                    <option key={val} value={val}>{val}</option>
                  ))}
                </select>
                <span className={styles.ptsSuffix}>PTS</span>
              </div>
            </div>

            <div className={styles.evalSection}>
              <label className={styles.evalLabel}>Reviewer Feedback</label>
              <textarea
                className={styles.feedbackTextarea}
                placeholder="Add comments for the student..."
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
                rows={4}
              />
            </div>

            <div className={styles.actionButtons}>
              <button
                className={`${styles.approveBtn} ${status === 'approved' ? styles.activatedApprove : ''}`}
                onClick={handleApprove}
                disabled={!!status}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill={status === 'approved' ? 'white' : 'rgba(0,0,0,0.15)'} />
                  <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Approve Submission
              </button>

              <button
                className={`${styles.rejectBtn} ${status === 'rejected' ? styles.activatedReject : ''}`}
                onClick={handleReject}
                disabled={!!status}
              >
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke={status === 'rejected' ? 'white' : '#e05252'} strokeWidth="2" />
                  <path d="M15 9l-6 6M9 9l6 6" stroke={status === 'rejected' ? 'white' : '#e05252'} strokeWidth="2" strokeLinecap="round" />
                </svg>
                Reject Submission
              </button>
            </div>

            <div className={styles.lastUpdated}>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="#bbb" strokeWidth="2" />
                <path d="M12 7v5l3 3" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>Student last updated: {student.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
