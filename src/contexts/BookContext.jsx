import React, { createContext, useState } from 'react'
import { v4 as uuid } from 'uuid';

export const BookContext = createContext()

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: 'harry potter', author: 'J.K Rowling', id: 1},
    { title: 'the final empire', author: 'brandon sanderson', id: 2},
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}])
  }
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
    console.log(books)
  }
  // useEffect(() => {
  //   console.log(books)
  // }, [books])
  return (
    <BookContext.Provider value={{ books, removeBook, addBook }}>
      {props.children}
    </BookContext.Provider>
  )
}
export default BookContextProvider