import { IGenre } from "./IGenre"

export class Genre implements IGenre {
	public id: String
	public name: String

	constructor (id: String, name: String) {
		this.id = id
		this.name = name
	}
}
