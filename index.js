require('dotenv').config();
const server = require('./server.js');


//listen
const PORT = process.env.PORT || 8000;
server.listen(PORT,()=>{
    console.log(`SERVER IS LISTENING: ${PORT}:`);
});