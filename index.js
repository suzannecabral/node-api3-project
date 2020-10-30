const server = require('./server');

const PORT = 7500;

console.log("Port:", PORT);

server.listen(PORT,()=>{
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
