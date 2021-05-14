import FakeDB from '../../../db/fakeDB/index.js'

import FakeDB2 from 'db/fakeDB/index.js'

const getGenre = (_, { id }) => FakeDB.genre.genres.find(genre => genre.id == id)
const getGenres = () => FakeDB.genre.genres

export default { getGenre, getGenres }
