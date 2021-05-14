import { createModule } from 'graphql-modules'
import __dirname from '../../../util/dirname.js'
import schema from './schema.js'


const BaseModule = createModule({
	id: 'base-module',
	dirname: __dirname,
	typeDefs: schema,
})


export default BaseModule
