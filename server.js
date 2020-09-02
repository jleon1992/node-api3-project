const express = require('express');

// const postRouter = require('./posts/postRouter')
const userRouter = require('./users/userRouter')
const server = express();

server.use(express.json())


server.use(logger)
server.get('/', (req, res) => {
  res.send(`<h2>Middleware excercises</h2>`);
});




server.use('/api/users', userRouter)
//custom middleware

function logger(req, res, next) {
    console.log(`You made a ${req.method} request to the  ${req.url} endpoint at ${new Date()}`)
    next()
}

module.exports = server;
