import { createModule } from 'graphql-modules'
import schema from './schema.js'


const BaseModule = createModule({
	id: 'base-module',
	dirname: __dirname,
	typeDefs: schema,
})


export default BaseModule
