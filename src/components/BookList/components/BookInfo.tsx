import React from 'react'
import styles from '../styles.scss'

interface BookInfoProps {
  name: string
  authors: string | string[]
  publisher: string
  numberOfPages: number
  isbn: string
  released: string
}

const BookInfo: React.FC<BookInfoProps> = ({
  authors,
  isbn,
  name,
  numberOfPages,
  publisher,
  released,
}): JSX.Element => {
  return (
    <section className={styles.bookinfo_container}>
      <h3>{name}</h3>
      <div className={styles.bookinfo_container__section}>Authors:</div>
      <span>{authors}</span>
      <div className={styles.bookinfo_container__section}>ISBN:</div>
      <span>{isbn}</span>

      <div className={styles.bookinfo_container__section}>Number of Pages:</div>
      <span>{numberOfPages}</span>

      <div className={styles.bookinfo_container__section}>Publisher:</div>
      <span>{publisher}</span>

      <div className={styles.bookinfo_container__section}>Release Date:</div>
      <span>{released}</span>
    </section>
  )
}

export default BookInfo
