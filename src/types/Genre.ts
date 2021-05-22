export default class Genre {
	public id: String
	public name: String
	static fromObject: any

	constructor (id: String, name: String) {
		this.id = id
		this.name = name
	}

	public fromObject ({id, name}): Genre {
		return new Genre(id, name)
	} 
}
