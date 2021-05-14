import FakeDB from '../../../db/fakeDB/index.js'
import Author from '../../entity/Author.js' 
import Genre from '../../entity/Genre.js' 
import Book from '../../entity/Book.js' 


function getGenres (genresIds) {
	return genresIds.map(genreId => {
		const genreObject = FakeDB.genre.genres.find(genre => genre.id == genreId); 
		if (!genreObject) {
				throw new Error('Cound\'t find specified genre')
		}

		return new Genre().fromObject(genreObject)
	})
}

function getAuthors (authorsIds) {
	return authorsIds.map(authorId => {
		const authorObject = FakeDB.author.authors.find(author => author.id == authorId); 
		if (!authorObject) {
				throw new Error('Cound\'t find specified author')
		}

		return new Author().fromObject(authorObject)
	})
}

function createBook (_, { title, summary, isbn, url, genresIds = [], authorsIds = []}) {
	try {
		const genres = getGenres(genresIds)
		const authors = getAuthors(authorsIds)
		const id = FakeDB.book.nextId()

		const book = new Book(id, title, summary, isbn, url, genres, authors)
		
		FakeDB.book.books.push(book)

		return book
	} catch (error) {
		return error
	}
}


export default { createBook }
