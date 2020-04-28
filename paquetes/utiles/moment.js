const moment = require('moment')

//objeto
let ahora= moment()
console.log(ahora)

//En string
console.log(ahora.toString())

//Formatear la fecha como quieramos
console.log(ahora.format('YY-MM-DD - HH:mm'))


//StartOf

//Substract Restar entre fechas