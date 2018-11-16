"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_koa_1 = require("apollo-server-koa");
require("./model");
// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = apollo_server_koa_1.gql `
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
  }
`;
// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
    },
};
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new apollo_server_koa_1.ApolloServer({ typeDefs, resolvers });
exports.default = (app) => {
    require("./route/dev.route")(app);
    server.applyMiddleware({ app: app, path: '/graphql' });
    require("./route/framwork.route")(app);
    // require('./route/rest.route')(app);
    // require("./route/web.route")(app);
    // require('./route/crawl.route')(app);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYXBwL3JvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFzRDtBQUN0RCxtQkFBaUI7QUFHakIsZ0VBQWdFO0FBQ2hFLCtEQUErRDtBQUMvRCw0REFBNEQ7QUFDNUQsTUFBTSxLQUFLLEdBQUc7SUFDWjtRQUNFLEtBQUssRUFBRSx5Q0FBeUM7UUFDaEQsTUFBTSxFQUFFLGNBQWM7S0FDdkI7SUFDRDtRQUNFLEtBQUssRUFBRSxlQUFlO1FBQ3RCLE1BQU0sRUFBRSxrQkFBa0I7S0FDM0I7Q0FDRixDQUFDO0FBRUYsK0RBQStEO0FBQy9ELDhEQUE4RDtBQUM5RCxNQUFNLFFBQVEsR0FBRyx1QkFBRyxDQUFBOzs7Ozs7Ozs7Ozs7OztDQWNuQixDQUFDO0FBRUYsK0RBQStEO0FBQy9ELDhEQUE4RDtBQUM5RCxNQUFNLFNBQVMsR0FBRztJQUNoQixLQUFLLEVBQUU7UUFDTCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSztLQUNuQjtDQUNGLENBQUM7QUFFRiwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELHFEQUFxRDtBQUNyRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGdDQUFZLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUV6RCxrQkFBZSxDQUFDLEdBQWdCLEVBQUUsRUFBRTtJQUNsQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQVUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUM5RCxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxzQ0FBc0M7SUFDdEMscUNBQXFDO0lBQ3JDLHVDQUF1QztBQUN6QyxDQUFDLENBQUMifQ==