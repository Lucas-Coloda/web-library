import FakeDB from 'src/db/fakeDB'
import Author from '@types/Author'
import Book from '@types/Book'
import Genre from '@types/Genre'


function getGenres (genresIds): Genre[] {
	return genresIds.map(genreId => {
		const genreObject = FakeDB.genre.genres.find(genre => genre.id == genreId) 
		if (!genreObject) {
				throw new Error('Cound\'t find specified genre')
		}

		return new Genre.fromObject(genreObject)
	})
}

function getAuthors (authorsIds: String[]) {
	return authorsIds.map(authorId => {
		const authorObject = FakeDB.author.authors.find(author => author.id == authorId) 
		if (!authorObject) {
				throw new Error('Cound\'t find specified author')
		}

		return new Author.fromObject(authorObject)
	})
}

function createBook (_: any, { title, summary, isbn, url, genresIds = [], authorsIds = []}) {
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
