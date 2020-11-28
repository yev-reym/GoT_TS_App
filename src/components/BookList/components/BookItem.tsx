import React from 'react'
import styles from '../styles.scss'
import FlipPage from 'react-flip-page'
import BookInfo from './BookInfo'

interface BookItemProps {
  book: BookType
}

const BookItem: React.FC<BookItemProps> = ({ book }): JSX.Element => {
  const { number } = book
  return (
    <FlipPage
      orientation={'horizontal'}
      showHint={true}
      uncutPages={false}
      height={400}
      width={300}
      flipOnTouch={true}
      animationDuration={500}
      disableSwipe={true}
      className={styles.flip__override}
      pageBackground={'#D1BE9D'}
      loopForever={true}
    >
      <img
        className={styles.book__image}
        src={`../../assets/images/books/book${number}.png`}
        alt={`${number}`}
      />
      <BookInfo {...book} />
    </FlipPage>
  )
}

export default BookItem
