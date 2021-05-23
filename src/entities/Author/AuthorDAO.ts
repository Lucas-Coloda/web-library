import { IAuthorDAO } from './IAuthorDAO'
import { Author } from './Author'
import FakeDB from 'src/db/fakeDB'

export class AuthorDAO implements IAuthorDAO {
	public getAuthor (id: Number): Author {
		const author = FakeDB.author.authors.find(author => author.id == id)

		if (!author) {
			throw new Error('Cound\'t find specified author')
		}

		return new Author(author.id, author.name, author.lastName)
	}

	public getAuthors (): Author[] {
		return FakeDB.author.authors
	}

	public getAuthorsFromListId (ids: Number[]): Author[] {
		return ids.map(authorId => this.getAuthor(authorId))
	}
}
