const counters = {
	book: 0,
	genre: 0,
	author: 0,
};

const fakeData = {
	book: {
		books: [],
		nextId: (): Number => {
			counters.book++
			return counters.book
		},
	},
	genre: {
		genres: [],
		nextId: (): Number => {
			counters.genre++
			return counters.genre
		},
	},
	author: {
		authors: [],
		nextId: (): Number => {
			counters.author++
			return counters.author
		},
	}
}

export default fakeData
