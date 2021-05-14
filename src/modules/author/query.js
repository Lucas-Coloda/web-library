import fakeData from '../../../db/fakeDB/index.js'

const getAuthor = (_, { id }) => fakeData.author.authors.find(author => author.id == id)
const getAuthors = () => fakeData.author.authors

export default { getAuthor, getAuthors }
