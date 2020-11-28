import React, { useState, useEffect } from 'react'
import Loader from 'Components/Loader'
import { useBookContext } from '../../contexts/BookContext'
import { useFetchGoTData } from '../../hooks'
import { fetchRequest } from 'Utils/'
import BookItem from './components/BookItem'
import styles from './styles.scss'

interface BookListProps {}

const BookList: React.FC<BookListProps> = (): JSX.Element => {
  const [sort, changeSort] = useState<string>('Oldest')
  const [query, setQuery] = useState<string>('')
  const { loading, error, books = {}, bindedActions } = useBookContext()

  if (loading && !books[sort]) {
    return <Loader />
  }
  console.log('books', books)

  useFetchGoTData(query, bindedActions, fetchRequest)

  useEffect(() => {
    setQuery('books?pageSize=12')
  }, [])

  const renderBooks = (books: BookList): JSX.Element[] => {
    return books.map((book, idx: number) => {
      return (
        <li key={idx}>
          <BookItem book={book} />
        </li>
      )
    })
  }

  const renderError = (error: string) => (
    <span>
      We are experiencing technical difficulties, we apologize!
      {`Error: ${error}`}
    </span>
  )

  return (
    <>
      <label className={styles.label} htmlFor="sorts">
        Sort By:
      </label>
      <select
        id="sorts"
        name="sorts"
        onChange={(e) => changeSort(e.target.value)}
        value={sort}
      >
        <option value="Oldest">Oldest</option>
        <option value="Newest">Newest</option>
        <option value="Most Pages">Most Pages</option>
        <option value="Least Pages">Least Pages</option>
      </select>

      <ul className={styles.booklist_container}>
        {!!books[sort]
          ? renderBooks(books[sort])
          : error
          ? renderError(error)
          : null}
      </ul>
    </>
  )
}

export default BookList
