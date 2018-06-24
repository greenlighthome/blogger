console.log({starting: true});

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://eduarsil:database123@ds117061.mlab.com:17061/mareiwa-db');

mongoose.connection.once('open', ()=> {
    console.log('connected to db');
});

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const PORT = 4000
app.listen(PORT, ()=>{
    console.log({running: true});
    console.log('listen to port', PORT);
});