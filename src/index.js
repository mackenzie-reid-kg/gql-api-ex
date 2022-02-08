import { ApolloServer } from 'apollo-server-lambda'

import { typeDefs, resolvers } from './schema'

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    playground: true, 
    introspection: true
})

exports.handler = server.createHandler()