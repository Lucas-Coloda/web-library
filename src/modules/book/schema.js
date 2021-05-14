import { gql } from 'graphql-modules'


const schema = gql`
	type Book {
    id: String
    title: String
    # author: Author
    summary: String
    isbn: String
    url: String
    genres: [Genre]
    authors: [Author]
  }
	extend type Query {
		getBook(id: ID!): Book
		getBooks: [Book]!
	}
	extend type Mutation {
		createBook(
      title: String,
      summary: String,
      isbn: String, 
      url: String, 
      genresIds: [ID]
      authorsIds: [ID]
    ): Book
	}
`

export default schema
