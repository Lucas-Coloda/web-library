import FakeDB from 'src/db/fakeDB'
import Genre from '../../entity/Genre.js'

const createGenre = (_, { name }) => {
	const newGenreId = FakeDB.genre.nextId()
	const genre = new Genre(newGenreId, name);

	FakeDB.genre.genres.push(genre)

	return genre
}

export default { createGenre }
