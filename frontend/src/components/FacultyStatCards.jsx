import styles from './FacultyStatCards.module.css'

export default function StatCards({ assignedStudents, pendingReviews }) {
  const stats = [
    { label: 'Assigned Students', value: assignedStudents },
    { label: 'Pending Reviews', value: pendingReviews },
  ]

  return (
    <div className={styles.grid}>
      {stats.map(({ label, value }) => (
        <div key={label} className={styles.card}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </div>
      ))}
    </div>
  )
}
