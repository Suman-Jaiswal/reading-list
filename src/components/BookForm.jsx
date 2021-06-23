import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookForm() {
  const {addBook} = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
     addBook(title, author)
     setTitle('')
     setAuthor('')
  }
  return (
   <form onSubmit={handleSubmit}>
     <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} required placeholder="Book title"/>
     <input type="text" onChange={(e) => setAuthor(e.target.value)} name="author" value={author} required placeholder="Author" />
     <input type="submit" value="Add Book" />
   </form>
  )
}
