const express = require('express');

const server = express();

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  //logs every api request:
  // - timestamp
  // - req method
  // - req url
  const ts = new Date();
  console.log(`[${ts.toLocaleTimeString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = server;
