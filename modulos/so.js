const so = require('os')

//Conocer la arquitectura
console.log(so.arch())

//Conocer el SO
console.log(so.platform())

//Conocer el procesador
console.log(so.cpus())

//Conocer el numero de cores de la maquina
console.log(so.cpus().length)

//Monitorear los errores del SO
console.log(so.constants)

//Verificar la memoria libre
console.log(so.freemem())

const SIZE= 1024
function kb(bytes){return bytes/SIZE}
function mb(bytes){return kb(bytes)/SIZE}
function gb(bytes){return mb(bytes)/SIZE}

console.log(kb(so.freemem()))
console.log(mb(so.freemem()))
console.log(gb(so.freemem()))


//Ver la memoria total del sistem
console.log(so.totalmem())
console.log(kb(so.totalmem()))
console.log(mb(so.totalmem()))
console.log(gb(so.totalmem()))

//Guardar información en directorios
console.log(so.homedir())
console.log(so.tmpdir())

//Acceder al hostname de la maquina
console.log(so.hostname())