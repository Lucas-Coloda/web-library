export interface Author {
	readonly id: Number
	name: String
	lastName: String
	fromObject: Function
}

export class Author implements Author {
	public readonly id: Number
	public name: String
	public lastName: String

	constructor (id: Number, name: String, lastName: String) {
		this.id = id
		this.name = name
		this.lastName = lastName
	}

	public static fromObject: Function = ({ 
		id, name, lastName 
	}): Author => {
		return new Author(id, name, lastName);
	}
}
