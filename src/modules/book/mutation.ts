import { BookDAO } from '@types/Book/BookDAO'


function createBook (_: any, { title, summary, isbn, url, genresIds = [], authorsIds = []}) {
	try {
		return new BookDAO().createBook(title, summary, isbn, url, genresIds, authorsIds)
	} catch (error) {
		return error
	}
}


export default { createBook }
