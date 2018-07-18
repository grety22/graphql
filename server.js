const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

app.use('/graphql',graphqlHTTP({
    graphiql: true
}))

const port = 8711;

app.listen(port)
console.log('Im listening')