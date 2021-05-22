import { ApolloServer } from 'apollo-server';
import application from './src/applicationSchemaFactory'

const schema = application.createSchemaForApollo()

const server = new ApolloServer({ schema })

server.listen()
