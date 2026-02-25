import React from 'react'

export default function SearchBar({ query, setQuery }) {
  return (
    <section className="card search-card">
      <input
        className="search"
        placeholder="Search by title or author"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search books"
      />
    </section>
  )
}
