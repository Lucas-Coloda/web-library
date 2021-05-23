import { Author } from "./Author";

export interface IAuthorDAO {
	getAuthor(id: Number): Author
	getAuthorsFromListId(ids: Number[]): Author[]
	getAuthors(): Author[]
}
