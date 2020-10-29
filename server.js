const express = require('express');
const postRouter = require('./posts/postRouter');

const server = express();

//custom middleware------------------------

function logger(req, res, next) {
  //logs every api request:
  // - timestamp
  // - req method
  // - req url
  const ts = new Date();
  console.log("-------------------------");
  console.log(`[${ts.toLocaleTimeString()}] ${req.method} ${req.url}`);
  console.log(`Request body:`);
  console.log(req.body);
  console.log("-------------------------");
  next();
}


//apply middleware------------------------

server.use(express.json());
server.use(logger);

//use router and its middleware
server.use('/api/posts', postRouter);


//server config------------------------

server.get('/', (req, res) => {
  res.send(`<h2>Welcome!</h2>`);
});

server.get('/api/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
