import { createModule } from 'graphql-modules'

import Query from './query.js'
import Mutation from './mutation.js'
import typeDefs from './schema.js'


const AuthorModule = createModule({
	id: 'author-module',
	dirname: __dirname,
	resolvers: { Mutation, Query },
	typeDefs,
})


export default AuthorModule
