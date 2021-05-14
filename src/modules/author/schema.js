import { gql } from 'graphql-modules'


const schema = gql`
	type Author {
		id: ID
		name: String
		lastName: String
	}
	extend type Query {
		getAuthor(id: ID!): Author
		getAuthors: [Author] 
	}
	extend type Mutation {
		createAuthor(name: String, lastName: String): Author 
	}
`

export default schema
