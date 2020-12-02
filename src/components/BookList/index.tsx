import React, { useState, useEffect } from 'react'
import Loader from 'Components/Loader'
import { useBookContext } from '../../contexts/BookContext'
import { useFetchGoTData } from '../../hooks'
import BookItem from './components/BookItem'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import styles from './styles.scss'

interface BookListProps {}

const BookList: React.FC<BookListProps> = (): JSX.Element => {
  const [sort, changeSort] = useState<string>('Oldest')
  const [query, setQuery] = useState<string>('')
  const { loading, error, books = {}, bindedActions } = useBookContext()

  useEffect(() => {
    setQuery('books?pageSize=12')
  }, [])

  useFetchGoTData(query, bindedActions)

  if (loading && !books[sort]) {
    return <Loader />
  }

  const renderBooks = (books: BookList): JSX.Element[] => {
    return books.map((book, idx: number) => {
      return (
        <li key={idx}>
          <BookItem book={book} />
        </li>
      )
    })
  }

  const renderError = () => (
    <span
      style={{
        fontSize: '25px',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        marginTop: '20px',
        display: 'block',
        fontFamily: 'Cinzel Decorative',
      }}
    >
      We are experiencing technical difficulties, we apologize!
    </span>
  )

  return (
    <>
      <FormControl variant={'outlined'}>
        <label
          style={{ marginBottom: '5px' }}
          className={styles.label}
          htmlFor="sorts"
        >
          Sort By:
        </label>
        <InputLabel htmlFor="sorts" />
        <Select
          defaultValue={sort}
          autoWidth
          id="sorts"
          onChange={(e) => changeSort(`${e.target.value}`)}
        >
          <MenuItem value="Oldest">
            <em>Oldest</em>
          </MenuItem>
          {/* <MenuItem value={"Oldest"}>Male</MenuItem> */}
          <MenuItem value={'Newest'}>Newest</MenuItem>
          <MenuItem value={'Most Pages'}>Most Pages</MenuItem>
          <MenuItem value={'Least Pages'}>Least Pages</MenuItem>
        </Select>
      </FormControl>

      <ul className={styles.booklist_container}>
        {!!books[sort]
          ? renderBooks(books[sort])
          : error
          ? renderError()
          : null}
      </ul>
    </>
  )
}

export default BookList
