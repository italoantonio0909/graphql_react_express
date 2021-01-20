const { GraphQLServer } = require("graphql-yoga");
const Resolver = require("./graphql/resolver/index");
const Schema = require("./graphql/schema/products.schema");

const server = new GraphQLServer({
  typeDefs: Schema,
  resolvers: Resolver,
});

module.exports = server;
