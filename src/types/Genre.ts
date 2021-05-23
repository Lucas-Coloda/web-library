export interface Genre {
	id: String
	name: String
	fromObject: Function
}

export class Genre implements Genre {
	public id: String
	public name: String

	constructor (id: String, name: String) {
		this.id = id
		this.name = name
	} 

	public static fromObject: Function = ({
		id, name
	}): Genre => {
		return new Genre(id, name) 
	}
}
