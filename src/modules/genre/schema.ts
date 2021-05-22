import { gql } from 'graphql-modules'

const schema = gql`
	type Genre {
    id: ID
    name: String
  }
	extend type Query {
		getGenre(id: ID!): Genre
		getGenres: [Genre]!
	}
	extend type Mutation {
		createGenre(name: String!): Genre
	}
`

export default schema
