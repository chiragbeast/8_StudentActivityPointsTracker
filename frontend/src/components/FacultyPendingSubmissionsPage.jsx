import { useState } from 'react'
import { Mail } from 'lucide-react'
import MailModal from './FacultyMailModal'
import styles from './FacultyPendingSubmissionsPage.module.css'

const submissionsData = [
  {
    id: 1,
    name: 'Aditi Sharma',
    initials: 'AS',
    avatarBg: '#6aab7a',
    activity: 'National Hackathon 2024',
    category: 'Institute',
    categoryType: 'institute',
    points: 50,
    date: 'Feb 12, 2026',
  },
  {
    id: 2,
    name: 'Rahul Verma',
    initials: 'RV',
    avatarBg: '#e8a87c',
    activity: 'Campus Clean Drive',
    category: 'Department',
    categoryType: 'department',
    points: 20,
    date: 'Feb 11, 2026',
  },
  {
    id: 3,
    name: 'Sneha Kapoor',
    initials: 'SK',
    avatarBg: '#7aabcc',
    activity: 'Inter-College Debate',
    category: 'Institute',
    categoryType: 'institute',
    points: 15,
    date: 'Jan 10, 2026',
  },
  {
    id: 4,
    name: 'Arjun Das',
    initials: 'AD',
    avatarBg: '#b0b8cc',
    activity: 'Research Paper Publication',
    category: 'Department',
    categoryType: 'department',
    points: 100,
    date: 'Jan 09, 2026',
  },
  {
    id: 5,
    name: 'Priya Nair',
    initials: 'PN',
    avatarBg: '#a3c4e8',
    activity: 'Workshop on AI',
    category: 'Institute',
    categoryType: 'institute',
    points: 30,
    date: 'Jan 08, 2026',
  },
  {
    id: 6,
    name: 'Karan Mehta',
    initials: 'KM',
    avatarBg: '#f0a8c0',
    activity: 'Cultural Fest Coordination',
    category: 'Department',
    categoryType: 'department',
    points: 45,
    date: 'Jan 08, 2026',
  },
  {
    id: 7,
    name: 'Lakshya Gupta',
    initials: 'LG',
    avatarBg: '#c0c0f0',
    activity: 'IoT Workshop',
    category: 'Institute',
    categoryType: 'institute',
    points: 25,
    date: 'Jan 07, 2026',
  }
]

export default function PendingSubmissionsPage({ onReview }) {
  const [selectedIds, setSelectedIds] = useState([])
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [sortOrder, setSortOrder] = useState('newest') // newest, oldest
  const [mailTarget, setMailTarget] = useState(null)

  const filteredAndSorted = submissionsData
    .filter(s => {
      const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.activity.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = categoryFilter === 'All' || s.category === categoryFilter
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB
    })

  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const handleBulkApprove = () => {
    alert(`Approved ${selectedIds.length} submissions`)
    setSelectedIds([])
  }

  const handleBulkReject = () => {
    alert(`Rejected ${selectedIds.length} submissions`)
    setSelectedIds([])
  }

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Pending Submissions</h1>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statsCard}>
          <span className={styles.statsLabel}>TOTAL PENDING</span>
          <span className={styles.statsValue}>28</span>
        </div>
        <div className={styles.statsCard}>
          <span className={styles.statsLabel}>REVIEWS COMPLETED TODAY</span>
          <span className={styles.statsValue}>12</span>
        </div>
      </div>

      {/* Filter & Search Area - Moved just above the table */}
      <div className={styles.filterRow}>
        <div className={styles.searchGroup}>
          <div className={styles.searchWrapper}>
            <svg className={styles.searchIcon} width="16" height="16" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search submissions..."
              className={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className={styles.searchBtn}>Search</button>
        </div>

        <div className={styles.filterGroup}>
          <div className={styles.selectWrapper}>
            <span className={styles.selectLabel}>Category:</span>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className={styles.select}
            >
              <option value="All">All Categories</option>
              <option value="Institute">Institute</option>
              <option value="Department">Department</option>
            </select>
          </div>
          <div className={styles.selectWrapper}>
            <span className={styles.selectLabel}>Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className={styles.select}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>STUDENT NAME</th>
              <th>ACTIVITY NAME</th>
              <th>CATEGORY</th>
              <th>REQUESTED POINTS</th>
              <th>SUBMISSION DATE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((s) => (
              <tr key={s.id} className={selectedIds.includes(s.id) ? styles.rowSelected : ''}>
                <td>
                  <div className={styles.studentCell}>
                    <div
                      className={`${styles.avatar} ${selectedIds.includes(s.id) ? styles.selected : ''}`}
                      style={{ background: s.avatarBg }}
                      onClick={() => toggleSelect(s.id)}
                    >
                      <div className={styles.checkboxOverlay}>
                        <input
                          type="checkbox"
                          className={styles.checkbox}
                          checked={selectedIds.includes(s.id)}
                          readOnly
                        />
                      </div>
                      {s.initials}
                    </div>
                    <span className={styles.studentName}>{s.name}</span>
                  </div>
                </td>
                <td className={styles.activityName}>{s.activity}</td>
                <td>
                  <span className={`${styles.badge} ${styles[s.categoryType]}`}>
                    {s.category.toUpperCase()}
                  </span>
                </td>
                <td className={`
                  ${styles.points} 
                  ${s.categoryType === 'department' ? styles.departmentPoints : ''}
                  ${s.categoryType === 'institute' ? styles.institutePoints : ''}
                `}>{s.points}</td>
                <td className={styles.date}>{s.date}</td>
                <td>
                  <div className={styles.actionGroup}>
                    <button
                      className={styles.mailBtn}
                      onClick={() => setMailTarget(s)}
                    >
                      <Mail size={16} />
                    </button>
                    <button className={styles.reviewBtn} onClick={() => onReview && onReview(s)}>Review</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedIds.length > 0 && (
        <div className={styles.bulkActions}>
          <span className={styles.bulkCount}>{selectedIds.length} submissions selected</span>
          <div className={styles.bulkBtnGroup}>
            <button className={styles.bulkApproveBtn} onClick={handleBulkApprove}>Bulk Approve</button>
            <button className={styles.bulkRejectBtn} onClick={handleBulkReject}>Bulk Reject</button>
          </div>
        </div>
      )}
      {/* Mail Modal */}
      <MailModal
        isOpen={!!mailTarget}
        onClose={() => setMailTarget(null)}
        studentName={mailTarget?.name}
      />
    </div>
  )
}
