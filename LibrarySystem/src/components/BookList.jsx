import React from 'react'

export default function BookList({ items, query, primaryLabel, primaryAction, deleteBook, showBorrower, getInitials, emptyText }) {
  const q = (query || '').trim().toLowerCase()
  const filtered = items.filter((b) => {
    if (!q) return true
    return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
  })
  if (filtered.length === 0) return <p className="empty">{emptyText || 'No books.'}</p>

  return (
    <ul className="list">
      {filtered.map((b) => (
        <li key={b.id} className="list-item book-card">
          <div className="cover-wrap">
            {b.cover ? (
              <img className="cover-img" src={b.cover} alt={`Cover of ${b.title}`} />
            ) : (
              <div className="cover initials">{getInitials(b.title)}</div>
            )}
          </div>
          <div className="info">
            <strong className="title">{b.title}</strong>
            <div className="muted">by {b.author}{showBorrower && b.borrower ? ` — borrowed by ${b.borrower}` : ''}</div>
          </div>
          <div className="actions">
            <button className="btn small" onClick={() => primaryAction(b.id)}>{primaryLabel}</button>
            <button className="btn small danger" onClick={() => deleteBook(b.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
