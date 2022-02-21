const http = require('http');
const app = require ('./app');
const port = (process.env.PORT||3000)
const server = http.createServer(app);
app.set('port', port)
server.on('listening', ()=>{
    const address = server.address()
    const bind = typeof address === 'string' ? 'pipe' + address : 'port =' +port
    console.log('ecoute ' + bind)
})
server.listen(process.env.PORT || 3000);