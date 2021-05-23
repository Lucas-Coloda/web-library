import FakeDB from 'src/db/fakeDB'

import { IGenreDAO } from './IGenreDAO'
import { Genre } from './Genre'


export class GengeDAO implements IGenreDAO {
	public getGenre(id: Number): Genre {
		const genre = FakeDB.genre.genres.find(genre => genre.id == id)
		
		if (!genre) {
			throw new Error('Cound\'t find specified genre')
		}

		return new Genre(genre.id, genre.name)
	}

	public getGenresFromListId(ids: Number[]): Genre[] {
		return ids.map(genreId => this.getGenre(genreId))
	}

	public getGenres(): Genre[] {
		return FakeDB.genre.genres
	}
}
