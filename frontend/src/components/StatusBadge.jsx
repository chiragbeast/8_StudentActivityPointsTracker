const statusStyles = {
  pending: { text: 'Pending', color: '#F59E0B', bg: '#FEF3C7', border: '#FCD9A5' },
  approved: { text: 'Approved', color: '#22C55E', bg: '#DCFCE7', border: '#A7F3D0' },
  rejected: { text: 'Rejected', color: '#EF4444', bg: '#FEE2E2', border: '#FECACA' },
};

export default function StatusBadge({ status = 'pending' }) {
  const key = status.toLowerCase();
  const style = statusStyles[key] || statusStyles.pending;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 12px',
        borderRadius: '999px',
        fontWeight: 600,
        fontSize: '0.75rem',
        color: style.color,
        background: style.bg,
        border: `1px solid ${style.border}`,
        width: 'fit-content',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: style.color,
          flexShrink: 0,
        }}
      />
      {style.text}
    </div>
  );
}
