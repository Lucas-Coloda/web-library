import { BookDAO } from '@entities/Book/BookDAO'

const getBook = (_, { id }) => new BookDAO().getBook(id)
const getBooks = () => new BookDAO().getBooks()

export default { getBook, getBooks }
