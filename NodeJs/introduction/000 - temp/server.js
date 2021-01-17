const http = require('http');

const server = http.createServer((req, res) => {
 if(req.url ==='/'){
     res.write("Hello World")
     res.end();
 }

 if(req.url == 'api/course') {
     res.write('teste')
     res.end()
 }

})

server.on('connection', (socket) => {
    console.log('new conection...')
})

server.listen(3000)

console.log('listening...', 3000)

