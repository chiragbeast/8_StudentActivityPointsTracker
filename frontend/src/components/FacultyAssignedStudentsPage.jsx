import { useState } from 'react'
import { Mail } from 'lucide-react'
import MailModal from './FacultyMailModal'
import styles from './FacultyAssignedStudentsPage.module.css'

const allStudents = [
  { id: 1, name: 'Aditi Sharma', studentId: 'B260001CS', institutePoints: 45, deptPoints: 30, total: 75 },
  { id: 2, name: 'Rahul Verma', studentId: 'B260005CS', institutePoints: 50, deptPoints: 20, total: 70 },
  { id: 3, name: 'Sneha Kapoor', studentId: 'B260012CS', institutePoints: 35, deptPoints: 40, total: 75 },
  { id: 4, name: 'Arjun Das', studentId: 'B260008CS', institutePoints: 60, deptPoints: 15, total: 75 },
  { id: 5, name: 'Priya Nair', studentId: 'B260022CS', institutePoints: 42, deptPoints: 50, total: 92 },
  { id: 6, name: 'Karan Mehta', studentId: 'B260031CS', institutePoints: 38, deptPoints: 25, total: 63 },
  { id: 7, name: 'Divya Iyer', studentId: 'B260044CS', institutePoints: 55, deptPoints: 35, total: 90 },
  { id: 8, name: 'Rohan Gupta', studentId: 'B260017CS', institutePoints: 20, deptPoints: 45, total: 65 },
  { id: 9, name: 'Ananya Rao', studentId: 'B260039CS', institutePoints: 70, deptPoints: 10, total: 80 },
  { id: 10, name: 'Vikram Singh', studentId: 'B260055CS', institutePoints: 48, deptPoints: 32, total: 80 },
  { id: 11, name: 'Meera Pillai', studentId: 'B260061CS', institutePoints: 33, deptPoints: 55, total: 88 },
  { id: 12, name: 'Suresh Babu', studentId: 'B260072CS', institutePoints: 62, deptPoints: 18, total: 80 },
]

const PAGE_SIZE = 5

export default function AssignedStudentsPage() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [mailTarget, setMailTarget] = useState(null)

  const filtered = allStudents.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.studentId.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className={styles.page}>

      {/* ── Page Header ── */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Assigned Students</h1>
          <p className={styles.pageSubtitle}>Manage and monitor student progress for your current cohort.</p>
        </div>
      </div>

      <div className={styles.searchGroup}>
        <div className={styles.searchWrapper}>
          <svg className={styles.searchIcon} width="16" height="16" fill="none" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search by student name or ID..."
            className={styles.searchInput}
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
        <button className={styles.searchBtn}>Search</button>
      </div>


      {/* ── Table ── */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>STUDENT NAME</th>
              <th>STUDENT ID</th>
              <th>INSTITUTE POINTS</th>
              <th>DEPT. POINTS</th>
              <th>TOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? paginated.map((s) => (
              <tr key={s.id}>
                <td className={styles.nameCell}>{s.name}</td>
                <td className={styles.idCell}>{s.studentId}</td>
                <td className={styles.institutePoints}>{s.institutePoints}</td>
                <td className={styles.deptPoints}>{s.deptPoints}</td>
                <td><span className={styles.totalBadge}>{s.total}</span></td>
                <td>
                  <div className={styles.actionGroup}>
                    <button
                      className={styles.mailBtn}
                      onClick={() => setMailTarget(s)}
                    >
                      <Mail size={16} />
                    </button>
                    <button className={styles.exportBtn}>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                        <path d="M12 3v13M7 11l5 5 5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 21h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      Export
                    </button>
                  </div>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan={6} className={styles.emptyState}>No students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      <div className={styles.pagination}>
        <span className={styles.paginationInfo}>
          Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} students
        </span>
        <div className={styles.paginationControls}>
          <button
            className={styles.pageBtn}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={styles.pageBtn}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || filtered.length === 0}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mail Modal ── */}
      <MailModal
        isOpen={!!mailTarget}
        onClose={() => setMailTarget(null)}
        studentName={mailTarget?.name}
      />

    </div>
  )
}
