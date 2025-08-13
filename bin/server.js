const http = require ('http')
const app = require ('../src/app')
const port = parseInt(process.env.PORT, 10 ) || 3000;
const server = http.createServer(app);

server.listen(port);
server.on('listening', onlistening);
console.log(`´Api executada na porta: ${port}`);

function onlistening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
    console.log('Listing on ' + bind );
}