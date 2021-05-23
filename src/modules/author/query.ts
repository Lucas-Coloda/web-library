import { AuthorDAO } from '@types/Author'

const getAuthor = (_, { id }) => new AuthorDAO().getAuthor(id)
const getAuthors = () => new AuthorDAO().getAuthors()

export default { getAuthor, getAuthors }
