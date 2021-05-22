import { createModule } from 'graphql-modules'

import Query from './query.js'
import Mutation from './mutation.js'
import typeDefs from './schema.js'


const BookModule = createModule({
	id: 'book-module',
	dirname: __dirname,
	resolvers: { Mutation, Query },
	typeDefs
})

export default BookModule
