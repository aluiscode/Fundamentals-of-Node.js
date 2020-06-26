const http = require('http')

http.createServer(route).listen(3000)

function route (req, res){
    console.log('Nueva petición')
    console.log(req.url)
    switch(req.url){
        case '/':
            res.statusCode=201
            res.writeHead(201,{'Content-Type': 'text/plain'})
            res.write('Ya te oi, :)')
            res.end();
            break;

        default:
            res.writeHead(404,{'Content-Type': 'text/plain'})
            res.write('404 not found')
            res.end();
    }
}

console.log('Servidor escuchando en el puerto 3000')





// const http = require('http');
// const host = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Primer servidor con Node.Js');
// });
// server.listen(port, host, () => {
//   console.log(`Servidor corriendo en http://${host}:${port}`);
// });