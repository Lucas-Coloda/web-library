import { Author } from '@types/Author/Author'
import { Genre } from '@types/Genre/Genre'


export interface IBook {
	readonly id: Number
	title: String
	summary: String
	isbn: String
	url: String
	genres: Genre[]
	authors: Author[]
}
