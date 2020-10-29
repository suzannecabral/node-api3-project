require('dotenv').config();
const server = require('./server.js');


//listen
const PORT = process.env.PORT || 8000;
const SUPERSECRET = process.env.SUPERSECRET || "No env";

console.log("Port:", PORT, "Super secret:", SUPERSECRET);

server.listen(PORT,()=>{
    console.log(`SERVER IS LISTENING: ${PORT}:`);
});