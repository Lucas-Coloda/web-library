import FakeDB from 'src/db/fakeDB'

import { Book } from "./Book"
import { IBookDAO } from "./IBookDAO"


export class BookDAO implements IBookDAO {
	getBook (id: Number): Book {
		return FakeDB.book.books.find(book => book.id == id)
	}
	getBooks (): Book[] {
		return FakeDB.book.books
	}

	createBook (title: String, summary: String, isbn: String, url: String, genresIds: Number[], authorsIds: Number[]): Book {
		const id = FakeDB.book.nextId()
		
		// TODO: final IDs ou instancias?
		const book = new Book(id, title, summary, isbn, url, genresIds, authorsIds)

		FakeDB.book.books.push(book)
		
		return book
	}
}
