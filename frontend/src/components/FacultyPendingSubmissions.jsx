import { useState } from 'react'
import styles from './FacultyPendingSubmissions.module.css'
import { User, Mail } from 'lucide-react'
import MailModal from './FacultyMailModal'

const submissions = [
  {
    id: 1,
    name: 'Aditi Sharma',
    avatarBg: '#6aab7a',
    initials: 'AS',
    studentId: 'B260001CS',
    department: 'Computer Science Dept.',
    activity: 'National Hackathon 2026',
    description: 'Participated in a national-level hackathon and developed an AI-based solution for waste management.',
    category: 'Institute',
    categoryType: 'institute',
    points: 50,
    date: 'Feb 12, 2026',
    submittedOn: 'Feb 12, 2026',
    fileName: 'Hackathon_Certificate_JD.pdf',
    fileSize: '2.1 MB',
    lastUpdated: 'Oct 13, 2023 9:00 AM',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    avatarBg: '#e8a87c',
    initials: 'RV',
    studentId: 'B260005CS',
    department: 'Computer Science Dept.',
    activity: 'Campus Clean Drive',
    description: 'Organized and led a campus-wide cleanliness drive with over 80 student volunteers.',
    category: 'Department',
    categoryType: 'department',
    points: 20,
    date: 'Feb 11, 2026',
    submittedOn: 'Feb 11, 2026',
    fileName: 'CleanDrive_Cert_SW.pdf',
    fileSize: '1.4 MB',
    lastUpdated: 'Oct 12, 2023 11:00 AM',
  },
  {
    id: 3,
    name: 'Sneha Kapoor',
    avatarBg: '#7aabcc',
    initials: 'SK',
    studentId: 'B260012CS',
    department: 'Computer Science Dept.',
    activity: 'Inter-College Debate',
    description: 'Represented the college at an inter-collegiate debate competition and secured 2nd place.',
    category: 'Institute',
    categoryType: 'institute',
    points: 15,
    date: 'Jan 10, 2026',
    submittedOn: 'Jan 10, 2026',
    fileName: 'Debate_Certificate_MC.pdf',
    fileSize: '0.9 MB',
    lastUpdated: 'Oct 11, 2023 3:30 PM',
  },
]

export default function PendingSubmissions({ onReviewClick }) {
  const [search, setSearch] = useState('')
  const [mailTarget, setMailTarget] = useState(null)

  const filtered = submissions.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.activity.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Pending Submissions</h2>
        <button className={styles.viewAll} onClick={() => onReviewClick('View All')}>View All</button>
      </div>

      <div className={styles.searchGroup}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="16" height="16" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search by student or activity..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button className={styles.searchBtn}>Search</button>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>STUDENT NAME</th>
              <th>ACTIVITY</th>
              <th>CATEGORY</th>
              <th>POINTS</th>
              <th>DATE</th>
              <th style={{textAlign: 'right'}}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td>
                  <div className={styles.studentCell}>
                    <div className={styles.studentAvatar}>
                      <User size={18} />
                    </div>
                    <span className={styles.studentName}>{s.name}</span>
                  </div>
                </td>
                <td className={styles.activity}>{s.activity}</td>
                <td>
                  <span className={`${styles.badge} ${styles[s.categoryType]}`}>
                    {s.category}
                  </span>
                </td>
                <td className={`
                  ${styles.points} 
                  ${s.categoryType === 'department' ? styles.departmentPoints : ''}
                  ${s.categoryType === 'institute' ? styles.institutePoints : ''}
                `}>
                  {s.points}
                </td>
                <td className={styles.date}>{s.date}</td>
                <td>
                  <div className={styles.actionGroup}>
                    <button
                      className={styles.mailBtn}
                      onClick={() => setMailTarget(s)}
                    >
                      <Mail size={16} />
                    </button>
                    <button className={styles.reviewBtn} onClick={() => onReviewClick(s)}>Review</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mail Modal */}
      <MailModal
        isOpen={!!mailTarget}
        onClose={() => setMailTarget(null)}
        studentName={mailTarget?.name}
      />
    </div>
  )
}
