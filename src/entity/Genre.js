class Genre {
	/**
	* @param {String} id 	Genre identifier.
	* @param {String} name	Genre name.
	*/
	constructor (id, name) {
		this.id = id
		this.name = name
	}

	fromObject ({id, name}) {
		return new Genre(id, name)
	} 
}

export default Genre
