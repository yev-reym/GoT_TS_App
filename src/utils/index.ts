import axios from 'axios'

///////////////////////////////////////////////////////////// FORMAT RESPONSE PAYLOADS ///////////////////////////////////////////////////////////////////
const formatDate = (unformattedDate: string) => {
  const date = new Date(unformattedDate)
  return date.toLocaleDateString('en-US')
}

const formatBookObject = (number: number, book: any): BookType => {
  const { authors, isbn, name, numberOfPages, publisher, released } = book
  const formattedAuthors = authors.length > 1 ? authors.join(' · ') : authors[0]

  const formattedBookObject = {
    number,
    name,
    authors: formattedAuthors,
    publisher,
    numberOfPages,
    isbn,
    released: formatDate(released),
  }
  return formattedBookObject
}

const sortBooks = (books: any[], sortType: string) => {
  switch (sortType) {
    case 'Oldest':
      return [
        ...books.sort(
          (a, b) =>
            new Date(a.released).getTime() - new Date(b.released).getTime()
        ),
      ]
    case 'Newest':
      return [
        ...books.sort(
          (a, b) =>
            new Date(b.released).getTime() - new Date(a.released).getTime()
        ),
      ]
    case 'Most Pages':
      return [...books.sort((a, b) => b.numberOfPages - a.numberOfPages)]
    case 'Least Pages':
      return [...books.sort((a, b) => a.numberOfPages - b.numberOfPages)]
    default:
      return books
  }
}

const handleBookListSort = (books: any[]): ObjectGeneric<BookType[]> => {
  const sortTypes = ['Oldest', 'Newest', 'Most Pages', 'Least Pages']

  const sortedBookLists = sortTypes.reduce((acc, sortType: string) => {
    return { ...acc, [sortType]: sortBooks(books, sortType) }
  }, {})

  return sortedBookLists
}

export const formatAndSortBookData = (
  bookData: BookType[]
): ObjectGeneric<BookType[]> => {
  const formattedBooks = bookData.map((bookObject: any, idx: number) =>
    formatBookObject(idx + 1, bookObject)
  )
  return handleBookListSort(formattedBooks)
}

export const formatHouseObject = (
  number: number,
  houseObject: HouseType | any
) => {
  const formattedHouseObject = Object.keys(houseObject).reduce(
    (acc, attribute: string) => {
      if (!houseObject[attribute] || !houseObject[attribute][0]) {
        return { ...acc, [attribute]: 'Not Available' }
      }
      return { ...acc, [attribute]: houseObject[attribute] }
    },
    {}
  )

  return { number, ...formattedHouseObject }
}

export const formatHousesData = (houseData: HouseList): any => {
  return houseData.map((houseObject: HouseType, idx: number) =>
    formatHouseObject(idx + 1, houseObject)
  )
}

const bookMapping = [
  'Book 1: A Game of Thrones',
  'Book 2: A Clash of Kings',
  'Book 3: A Storm of Swords',
  'Book 4: The Hedge Knight',
  'Book 5: A Feast for Crows',
  'Book 6: The Sworn Sword',
  'Book 7: The Mystery Knight',
  'Book 8: A Dance with Dragons',
  'Book 9: The Princess and the Queen',
  'Book 10: The Rogue Prince',
  'Book 11: The World of Ice and Fire',
  'Book 12: A Knight of the Seven Kingdoms',
]

export const formatCharacterBooks = (books: string[] | undefined) => {
  if (books) {
    const b = books.map((book) => {
      const bookNum = book[book.length - 1]
      return bookMapping[Number(bookNum)]
    })

    return b.length > 1 ? b.join(' · ') : b[0]
  }

  return 'Not Available'
}

export const checkEmptyFieldValues = (
  fieldValue: [''] | string | string[] | undefined
) => {
  if (!fieldValue || !fieldValue[0]) {
    return 'Not Available'
  }
  return typeof fieldValue === 'object' && fieldValue.length > 1
    ? fieldValue.join(' · ')
    : fieldValue
}

///////////////////////////////////////////////////////////// ASYNC REQUESTS ///////////////////////////////////////////////////////////////////
export const fetchRequest = async (query = '') => {
  return await axios({
    method: 'GET',
    url: `${process.env.API_REQUEST_DOMAIN}${query}`,
  })
}
