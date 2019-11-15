//bring express
const express = require('express');
const server = express();
const port = 3000;

//routes
server.get('/', (req, res) => {
    res.send('Hello world!');
});

//Donut routes
//CREATE
//ADD new donuts

server.post('/donuts', (req, res) => {
    //gets an object via req.body
    res.send('placeholder')
});

//GET donuts
server.get('/donuts', (req, res) => {
    res.send('Sorry, no donuts yet.');
});
//GET a single donut
server.get('/donuts/:id', (req, res) => {
    res.send('Still, no donuts here... Go away.');
});

//DELETE a donut
server.delete('/donuts/:id', (req, res) => {
    //req.body
    res.send('Goodbye donut.');
});

//UPDATE a donut
server.patch('/donuts/:id', (req, res) => {
    //req.body
    res.send('Donut Fixed');
});

//listen on port
server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});