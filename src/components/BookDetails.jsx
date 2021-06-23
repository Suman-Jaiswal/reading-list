import React from 'react'
import { BookContext } from '../contexts/BookContext'

export default function BookDetails({book}) {
  const {removeBook} = React.useContext(BookContext)
  return (
    <li className='book'>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <button onClick={() => removeBook(book.id)} className='btn-remove'>Remove</button>
    </li>
  )
}
