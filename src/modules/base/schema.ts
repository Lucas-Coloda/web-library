import { gql } from 'graphql-modules'

const schema = gql`
	type Query {
		_empty: String
  }
	type Mutation {
		_empty: String
  }
`

export default schema
