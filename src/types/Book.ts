import Author from "./Author"
import Genre from "./Genre"


export default class Book {
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

	public fromObject = ({ id, title, summary, isbn, url, genres, authors }) => {
		return new Book(id, title, summary, isbn, url, genres, authors)
	} 
}
