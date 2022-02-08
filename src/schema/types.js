import { gql } from 'apollo-server-lambda'

export const Types = gql `
    type Query {
        hello: String
    }
`