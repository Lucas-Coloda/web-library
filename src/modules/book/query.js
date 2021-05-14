import FakeDB from '../../../db/fakeDB/index.js'

const getBook = (_, { id }) => FakeDB.book.books.find(book => book.id == id)
const getBooks = () => FakeDB.book.books

export default { getBook, getBooks }
