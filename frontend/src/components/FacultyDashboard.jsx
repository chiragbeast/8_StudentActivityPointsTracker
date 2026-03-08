import { useState } from 'react'
import Sidebar from './FacultySidebar'
import StatCards from './FacultyStatCards'
import { Bell, X, Check, Info } from 'lucide-react'
import PendingSubmissions from './FacultyPendingSubmissions'
import PendingSubmissionsPage from './FacultyPendingSubmissionsPage'
import AssignedStudentsPage from './FacultyAssignedStudentsPage'
import ReviewDetailPage from './FacultyReviewDetailPage'
import styles from './FacultyDashboard.module.css'

const notifications = [
  { id: 1, type: 'success', text: 'Aditi Sharma\'s submission approved', time: '2 mins ago' },
  { id: 2, type: 'info', text: 'New activity submission from Rahul Verma', time: '1 hour ago' },
  { id: 3, type: 'info', text: 'Sneha Kapoor updated her profile', time: '3 hours ago' },
  { id: 4, type: 'success', text: 'Bulk approval of 5 items completed', time: '5 hours ago' },
  { id: 5, type: 'info', text: 'Reminder: 28 pending reviews remaining', time: '1 day ago' },
]

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [reviewSubmission, setReviewSubmission] = useState(null)
  const [showNotif, setShowNotif] = useState(false)

  // Called by any Review button — pass the submission object
  const openReview = (submission) => {
    if (submission === 'View All') {
      setActiveNav('Pending Submissions')
      return
    }
    setReviewSubmission(submission)
    setActiveNav('Review Detail')
  }

  // Called by breadcrumb "Submissions" link
  const closeReview = () => {
    setReviewSubmission(null)
    setActiveNav('Pending Submissions')
  }

  const renderPage = () => {
    switch (activeNav) {
      case 'Review Detail':
        return <ReviewDetailPage submission={reviewSubmission} onBack={closeReview} />
      case 'Assigned Students':
        return <AssignedStudentsPage />
      case 'Pending Submissions':
        return <PendingSubmissionsPage onReview={openReview} />
      case 'Dashboard':
      default:
        return (
          <>
            <div className={styles.dashHeader}>
              <h1 className={styles.dashTitle}>Faculty Dashboard</h1>
              <div className={styles.notifWrapper}>
                <button className={styles.bell} onClick={() => setShowNotif(!showNotif)}>
                  <Bell size={22} />
                  <span className={styles.badge}>5</span>
                </button>

                {showNotif && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                      <h3>Notifications</h3>
                      <button className={styles.closeBtn} onClick={() => setShowNotif(false)}>
                        <X size={16} />
                      </button>
                    </div>
                    <div className={styles.notifList}>
                      {notifications.map((n) => (
                        <div key={n.id} className={styles.notifItem}>
                          <div className={`${styles.iconCircle} ${styles[n.type]}`}>
                            {n.type === 'success' ? <Check size={14} /> : <Info size={14} />}
                          </div>
                          <div className={styles.notifContent}>
                            <p className={styles.notifText}>{n.text}</p>
                            <span className={styles.notifTime}>{n.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className={styles.viewAllBtn}>View All Notifications</button>
                  </div>
                )}
              </div>
            </div>
            <StatCards assignedStudents={142} pendingReviews={28} />
            <PendingSubmissions onReviewClick={openReview} />
          </>
        )
    }
  }

  return (
    <div className={styles.layout}>
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      <div className={styles.main}>
        <div className={styles.content}>
          {renderPage()}
        </div>
      </div>
    </div>
  )
}
