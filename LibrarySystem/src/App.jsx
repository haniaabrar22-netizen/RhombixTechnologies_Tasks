import React, { useEffect, useState } from 'react'
import './App.css'
import AddBookForm from './components/AddBookForm'
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'

function App() {
  // Load persisted books or start with an empty list
  const [books, setBooks] = useState(() => {
    try {
      const raw = localStorage.getItem('books')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  const [newBook, setNewBook] = useState({ title: '', author: '' })
  const [query, setQuery] = useState('')

  useEffect(() => {
    try {
      localStorage.setItem('books', JSON.stringify(books))
    } catch {
      // ignore storage errors
    }
  }, [books])

  const handleAddBook = (e) => {
    e.preventDefault()
    const title = newBook.title.trim()
    const author = newBook.author.trim()
    const cover = (newBook.cover || '').trim()
    if (!title || !author) {
      alert('Please provide both title and author')
      return
    }

    const book = {
      id: Date.now(),
      title,
      author,
      status: 'available',
      cover: cover || undefined,
    }

    setBooks((prev) => [book, ...prev])
    setNewBook({ title: '', author: '', cover: '' })
  }

  const borrowBook = (id) => {
    const borrower = prompt('Borrower name:')
    if (!borrower) return
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: 'borrowed', borrower } : b))
    )
  }

  const returnBook = (id) => {
    setBooks((prev) => prev.map((b) => (b.id === id ? { ...b, status: 'available', borrower: undefined } : b)))
  }

  const deleteBook = (id) => {
    if (!confirm('Delete this book?')) return
    setBooks((prev) => prev.filter((b) => b.id !== id))
  }

  const available = books.filter((b) => b.status === 'available')
  const borrowed = books.filter((b) => b.status === 'borrowed')

  function getInitials(title) {
    if (!title) return ''
    const parts = title.split(' ').filter(Boolean)
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return (parts[0][0] + parts[1][0]).toUpperCase()
  }
  return (
    <div className="app">
      <header className="header">
        <h1>Library System</h1>
        <p className="tag">A small, elegant demo to manage books</p>
      </header>

      <main className="main">
        <aside className="sidebar">
          <section className="card add-card">
            <h2>Add a Book</h2>
            <form className="form" onSubmit={handleAddBook}>
              <input aria-label="Book title" type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} />
              <input aria-label="Book author" type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} />
              <input aria-label="Cover image URL (optional)" type="text" placeholder="Cover image URL (optional)" value={newBook.cover || ''} onChange={(e) => setNewBook({ ...newBook, cover: e.target.value })} />
              <button className="btn" type="submit">Add Book</button>
            </form>
          </section>

          <SearchBar query={query} setQuery={setQuery} />
        </aside>

        <section className="lists">
          <div className="card">
            <h2>Available Books <small>({available.length})</small></h2>
            <BookList items={available} query={query} primaryLabel="Borrow" primaryAction={borrowBook} deleteBook={deleteBook} showBorrower={false} getInitials={getInitials} />
          </div>

          <div className="card">
            <h2>Borrowed Books <small>({borrowed.length})</small></h2>
            <BookList items={borrowed} query={query} primaryLabel="Return" primaryAction={returnBook} deleteBook={deleteBook} showBorrower={true} getInitials={getInitials} />
          </div>
        </section>
      </main>

      <footer className="footer">Simple Library · Stored in your browser</footer>
    </div>
  )
}

export default App
