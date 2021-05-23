import { Genre } from "./Genre";

export interface IGenreDAO {
	getGenre(id: Number): Genre
	getGenresFromListId(ids: Number[]): Genre[]
	getGenres(): Genre[]
}
