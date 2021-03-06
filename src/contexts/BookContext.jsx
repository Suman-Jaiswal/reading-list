import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext()

function BookContextProvider(props) {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  
  // const addBook = (title, author) => {
  //   setBooks([...books, {title, author, id: uuid()}])
  // }
  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id))
  //   console.log(books)
  // }
  // useEffect(() => {
  //   console.log(books)
  // }, [books])
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}
export default BookContextProvider