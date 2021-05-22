import FakeDB from 'src/db/fakeDB'

const getBook = (_, { id }) => FakeDB.book.books.find(book => book.id == id)
const getBooks = () => FakeDB.book.books

export default { getBook, getBooks }
