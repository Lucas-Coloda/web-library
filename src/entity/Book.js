import Author from '../entity/Author.js'
import Genre from '../entity/Genre.js'

class Book {
	/**
	* @param {String} 	id 		Book identifier.
	* @param {String} 	title	Book title.
	* @param {String} 	summary	Book summary.
	* @param {String} 	isbn 	International book identifier.
	* @param {URL}	  	url 	URL to find the book.
	* @param {Genre[]}	genres 	Genres of book.
	* @param {Author[]} authors Genres of book.
	*/
	constructor (id, title, summary, isbn, url, genres, authors) {
		this.id = id
		this.title = title
		this.summary = summary
		this.isbn = isbn
		this.url = url
		this.genres = genres
		this.authors = authors
	}

	fromObject = ({ id, title, summary, isbn, url, genres, authors }) => {
		return new Book(id, title, summary, isbn, url, genres, authors)
	} 
}

export default Book
