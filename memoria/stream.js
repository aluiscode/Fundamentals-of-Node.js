const fs = require('fs')
const stream = require('stream')
const util = require('util')

let data= '';

//Leer un dato de SSD
let readableStream = fs.createReadStream(`${__dirname}/input.txt`)

/*
//Recorrer un archivo Pequeño y Grande se manipula con los archivos paramtros antes del callback
readableStream.setEncoding('UTF8')
readableStream.on('data',(chunk)=>{
    //console.log(chunk)      //leer archivos pequeños usar un console
    data +=chunk;           ////la diferencia se nota en ram(solo archivos grandes)
})

//Imprimir su resultado que se obtiene cuando termine de leer un archivo grande
readableStream.on('end',()=>{
    console.log(data)
})
*/

//Stream de escritura
// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')


//Buffer de transformación
const Transform= stream.Transform;

function Mayus(){
    Transform.call(this)
}

console.log(Transform)

util.inherits(Mayus, Transform)   //Mayus hereda de transfor

Mayus.prototype._transform = function (chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus= new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)