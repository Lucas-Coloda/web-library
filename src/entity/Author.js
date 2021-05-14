class Author {
	/**
	 * @param {Number} id 				Author id.
	 * @param {String} name 			Author name. 
	 * @param {String} lastName 	Author last name.
	*/
	constructor (id, name, lastName) {
		this.id = id
		this.name = name
		this.lastName = lastName
	}

	fromObject ({ id, name, lastName }) {
		return new Author(id, name, lastName);
	}
}

export default Author
