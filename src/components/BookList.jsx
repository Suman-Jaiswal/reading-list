import React from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

export default function BookList() {

  const {books} = React.useContext(BookContext)

  return  ( books.length ?
    <div className='book-list'>
      <ul>
        {
          books.map(book => <BookDetails book={book} key={book.id} />)
        }
      </ul>
    </div>
   : <div className="empty">No Books to Read :)</div>)
}
