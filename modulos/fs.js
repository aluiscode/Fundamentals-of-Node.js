const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta,(error, data)=>{
        cb(data.toString())
    })
}

leer(`${__dirname}/archivo.txt`,console.log)

function escribir(ruta, contenido, callback){
    fs.writeFile(ruta, contenido, (error)=>{
        if(error){
            console.error(`No he podido escribirlo ${error}`)
        }else{
            console.log(`Se ha escrito correctamente`)
        }
    })
}

escribir(`${__dirname}/archivo.txt`, 'Soy un nuevo archivo' , console.log)


function borrar(ruta, cb){
    fs.unlink(ruta,cb);
}

borrar(`${__dirname}/archivo.txt`, console.log)
