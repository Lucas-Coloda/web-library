import fakeData from 'src/db/fakeDB'

const getAuthor = (_, { id }) => fakeData.author.authors.find(author => author.id == id)
const getAuthors = () => fakeData.author.authors

export default { getAuthor, getAuthors }
