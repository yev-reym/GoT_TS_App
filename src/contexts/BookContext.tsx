import React, { createContext, useContext, useReducer } from 'react'
import {
  initialBookState,
  bookActions,
  booksReducer,
} from 'Reducers/BooksReducer'

// Initialize store context
const BooksContext = createContext<StoreContext>({})

const BooksProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  // store values and dispatch
  const [bookState, dispatch] = useReducer(booksReducer, initialBookState)

  // Bind Book actions to dispatch
  const fetchBooks = () => dispatch(bookActions.fetchBooks())
  const fetchBooksSuccess = (payload: ObjectGeneric<BookList>) =>
    dispatch(bookActions.fetchBooksSuccess(payload))
  const fetchBooksFailure = (error: string) =>
    dispatch(bookActions.fetchBooksFailure(error))

  const bindedActions: any = {
    fetchDispatchAction: fetchBooks,
    successDispatchAction: fetchBooksSuccess,
    failDispatchAction: fetchBooksFailure,
  }

  const state = { ...bookState, bindedActions }

  return <BooksContext.Provider value={state}>{children}</BooksContext.Provider>
}

// Custom hook to engage Books Context
const useBookContext = () => {
  return useContext(BooksContext)
}

export { BooksProviderWrapper, useBookContext }
