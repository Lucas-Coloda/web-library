export default class Author {
	public readonly id: Number
	public name: String
	public lastName: String
	static fromObject: any

	constructor (id: Number, name: String, lastName: String) {
		this.id = id
		this.name = name
		this.lastName = lastName
	}

	public fromObject ({ id, name, lastName }): Author {
		return new Author(id, name, lastName);
	}
}
