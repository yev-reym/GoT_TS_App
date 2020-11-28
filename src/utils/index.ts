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
  console.log('formattedBooks', handleBookListSort(formattedBooks))
  return handleBookListSort(formattedBooks)
}

// export const formatHouseObject = (number, houseObject) => {
//   Object.keys(houseObject).forEach((attribute) => {
//     if (
//       houseObject[attribute] === '' ||
//       houseObject[attribute].length === 0 ||
//       houseObject[attribute][0] === ''
//     ) {
//       return (houseObject[attribute] = 'Not Available')
//     }
//   })

//   return { number, ...houseObject }
// }

// export const formatHousesData = (houseData) => {
//   return houseData.map((houseObject, idx) =>
//     formatHouseObject(idx + 1, houseObject)
//   )
// }

///////////////////////////////////////////////////////////// ASYNC REQUESTS ///////////////////////////////////////////////////////////////////

const API_URL_BOOKS = `${process.env.API_REQUEST_DOMAIN}books`
const API_URL_HOUSES = `${process.env.API_REQUEST_DOMAIN}houses`

const HOUSES_PAGE_SIZE = '&pageSize=20'

export const fetchRequest = async (query = '') =>
  await axios({
    method: 'GET',
    url: `${process.env.API_REQUEST_DOMAIN}${query}`,
  })

// export const fetchHousesRequest = (page) =>
//   axios({
//     method: 'GET',
//     url: `${API_URL_HOUSES}?page=${page}` + HOUSES_PAGE_SIZE,
//   })

// export const fetchHouseRequest = (API_HOUSE_URL) =>
//   axios({
//     method: 'GET',
//     url: API_HOUSE_URL,
//   })

// export const fetchCharacterRequest = (API_CHARACTER_URL) =>
//   axios({
//     method: 'GET',
//     url: API_CHARACTER_URL,
//   })
