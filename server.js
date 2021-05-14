import { ApolloServer } from 'apollo-server';
import application from './src/applicationSchemaFactory/index.js'

const schema = application.createSchemaForApollo()

const server = new ApolloServer({ schema })

server.listen()
