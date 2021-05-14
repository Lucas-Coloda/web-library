const counters = {
	book: 0,
	genre: 0,
	author: 0,
};

const fakeData = {
	book: {
		books: [],
		nextId: () => {
			counters.book++
			return counters.book
		},
	},
	genre: {
		genres: [],
		nextId: () => {
			counters.genre++
			return counters.genre
		},
	},
	author: {
		authors: [],
		nextId: () => {
			counters.author++
			return counters.author
		},
	}
}

export default fakeData
