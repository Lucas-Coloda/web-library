import { Author } from "./Author"
import { Genre } from "./Genre"

export interface Book {
	readonly id: String
	title: String
	summary: String
	isbn: String
	url: String
	genres: Genre[]
	authors: Author[]
	fromObject: Function
}

export class Book implements Book{
	public readonly id: String
	public title: String
	public summary: String
	public isbn: String
	public url: String
	public genres: Genre[]
	public authors: Author[]

	constructor (id: String, title: String, summary: String, isbn: String, url: String, genres: Genre[], authors: Author[]) {
		this.id = id
		this.title = title
		this.summary = summary
		this.isbn = isbn
		this.url = url
		this.genres = genres
		this.authors = authors
	}

	public static fromObject: Function = ({
		id, title, summary, isbn, url,
		genres, authors
	 }): Book => {
		return new Book(id, title, summary, isbn, url, genres, authors)
	}
}
