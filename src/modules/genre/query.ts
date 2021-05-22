import FakeDB from 'src/db/fakeDB'

const getGenre = (_, { id }) => FakeDB.genre.genres.find(genre => genre.id == id)
const getGenres = () => FakeDB.genre.genres

export default { getGenre, getGenres }
