import { ApolloClient, InMemoryCache } from "@apollo/client";


const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI || "http://localhost:3001/graphql",
  cache: new InMemoryCache()
})


export default apolloClient;