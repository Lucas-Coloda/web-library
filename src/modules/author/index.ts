import { createModule } from 'graphql-modules'

import Query from './query'
import Mutation from './mutation'
import typeDefs from './schema'


const AuthorModule = createModule({
	id: 'author-module',
	dirname: __dirname,
	resolvers: { Mutation, Query },
	typeDefs,
})


export default AuthorModule
