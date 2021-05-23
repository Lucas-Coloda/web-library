import { Author } from '@entities/Author/Author'
import { AuthorDAO } from '@entities/Author/AuthorDAO'
import { Genre } from '@entities/Genre/Genre'
import { GengeDAO } from '@entities/Genre/GenreDAO'
import { IBook } from './IBook'


export class Book implements IBook {
	public readonly id: Number
	public title: String
	public summary: String
	public isbn: String
	public url: String
	public genres: Genre[]
	public authors: Author[]

	constructor (id: Number, title: String, summary: String, isbn: String, url: String, genresIds: Number[], authorsIds: Number[]) {
		this.id = id
		this.title = title
		this.summary = summary
		this.isbn = isbn
		this.url = url
		this.genres = new GengeDAO().getGenresFromListId(genresIds)
		this.authors = new AuthorDAO().getAuthorsFromListId(authorsIds)
	}
}
