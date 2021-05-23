import { IAuthor } from "./IAuthor"

export class Author implements IAuthor {
	public readonly id: Number
	public name: String
	public lastName: String

	constructor (id: Number, name: String, lastName: String) {
		this.id = id
		this.name = name
		this.lastName = lastName
	}
}
