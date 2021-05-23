import { Author } from '@entities/Author/Author'
import { Genre } from '@entities/Genre/Genre'


export interface IBook {
	readonly id: Number
	title: String
	summary: String
	isbn: String
	url: String
	genres: Genre[]
	authors: Author[]
}
