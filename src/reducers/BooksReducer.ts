import { formatAndSortBookData } from 'Utils/'

// Initial state
export const initialBookState: StoreState = {
  books: {
    Oldest: [],
    Newest: [],
    'Most Pages': [],
    'Least Pages': [],
  },
  loading: false,
  error: null,
}

// Action Types
export const bookTypes: ObjectGeneric<string> = {
  RECEIVE_BOOKS: 'RECEIVE_BOOKS',
  RECEIVE_BOOKS_SUCCESS: 'RECEIVE_BOOKS_SUCCESS',
  RECEIVE_BOOKS_FAILURE: 'RECEIVE_BOOKS_FAILURE',
}

// Action creators
export const bookActions: ObjectGeneric<ActionCreator> = {
  fetchBooksSuccess: (booksData) => ({
    type: bookTypes.RECEIVE_BOOKS_SUCCESS,
    payload: booksData,
  }),

  fetchBooksFailure: (error) => ({
    type: bookTypes.RECEIVE_BOOKS_FAILURE,
    error: error,
  }),

  fetchBooks: () => ({
    type: bookTypes.RECEIVE_BOOKS,
  }),
}

// Reducer
export const booksReducer = (state: StoreState, action: Action) => {
  const { payload } = action

  switch (action.type) {
    case bookTypes.RECEIVE_BOOKS:
      return { ...state, loading: true }
    case bookTypes.RECEIVE_BOOKS_SUCCESS:
      return { ...state, loading: false, books: formatAndSortBookData(payload) }
    case bookTypes.RECEIVE_BOOKS_FAILURE:
      return { ...state, loading: false, error: payload }
    default:
      return state
  }
}
