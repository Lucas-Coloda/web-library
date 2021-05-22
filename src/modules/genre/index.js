import { createModule } from 'graphql-modules'

import Query from './query.js'
import Mutation from './mutation.js'
import typeDefs from './schema.js'


const GenreModule = createModule({
	id: 'genre-module',
	dirname: __dirname,
	resolvers: { Mutation, Query },
	typeDefs
})


export default GenreModule
