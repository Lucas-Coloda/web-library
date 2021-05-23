import { Book } from "./Book";

export interface IBookDAO {
	getBook(id: Number): Book
	getBooks(): Book[]
}
