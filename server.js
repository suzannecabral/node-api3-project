const express = require('express');
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');
//new server
const server = express();

// server.get('/', (req, res) => {
//   res.send(`<h2>Let's write some middleware!</h2>`);
// });

//custom middleware
//define
function logger(req, res, next) {

  const ts = new Date();
  console.log("----------------------------");
  console.log(`[${ts.toLocaleTimeString()}]  New request:`);
  console.log(`${req.method}  ${req.url}`);
  console.log("----------------------------");
  next();

}

//use middleware
server.use(express.json());
server.use(logger);

//use router
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

//default endpoints
server.get('/', (req,res)=>{
  res.status(200).json({message:'The server is running, better go catch it'});
});

//react app default endpoint



module.exports = server;

