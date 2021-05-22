import fakeData from 'src/db/fakeDB'
import Author from '../../entity/Author.js'

const createAuthor = (_, { name, lastName }) => {
    const newAuthorId = fakeData.author.nextId()
    const author = new Author(newAuthorId, name, lastName)

    fakeData.author.authors.push(author)

    return author
}


export default { createAuthor }
