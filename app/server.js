// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Load the module dependencies
const mongoose = require("./config/mongoose");
const express = require("./config/express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql");
const cors = require("cors");

// Create a new Mongoose connection instance
const db = mongoose();

// Create a new Express application instance
const app = express();

// Add the CORS middleware
app.use(cors());

// Define GraphQL endpoint
const graphqlEndpoint = "/graphql";

// Setup GraphQL middleware
app.use(
  graphqlEndpoint,
  graphqlHTTP({
    schema,
    rootValue: global,
    graphiql: true,
  })
);

// Define the port for the server
const port = process.env.PORT || 3001;

// Use the Express application instance to listen to the specified port
app.listen(port, () => {
  console.log(`GraphQL Server running at http://localhost:${port}${graphqlEndpoint}`);
});

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app; // returns the application object
