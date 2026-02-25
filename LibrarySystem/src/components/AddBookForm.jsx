import React from 'react'

export default function AddBookForm({ newBook, setNewBook, onAdd }) {
  return (
    <section className="card add-card">
      <h2>Add a Book</h2>
      <form className="form" onSubmit={onAdd}>
        <input
          aria-label="Book title"
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          aria-label="Book author"
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button className="btn" type="submit">Add Book</button>
      </form>
    </section>
  )
}
