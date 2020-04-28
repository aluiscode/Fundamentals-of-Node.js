// Viene todo importado en la variables de entorno porque es de los modulos globales
// const p= import('process')


/**
 * Escuchar cuando hay un a excepxión que nadie a capturado y esa excepción destruye el proceso
 *En caso de que haya un error podemos manipularlo de diferente formas:
 *Escribir un archivo log
 *Enviarnos un email
 *Es un seguro que se coloca para que el sistema no se rompa
**/
process.on('uncaughtException',(err,origen)=>{
    console.log('Se nos olvido capturar un error')
    console.error(err)
})

//Promesas que nadie alla capturado
process.on('uncaughtRejection',()=>{

})

//Antes de Salir
process.on('beforeExit', () => {
    console.log('El proceso esta por teminar')
})

//Cuando esta a punto de terminar, completamente desconectado el eventloop y 
//todo lo que se haga aqui debera ser sincrono
process.on('exit', () => {
    console.log('El proceso termino')
})

//Pruebas de uncaughtException
funcionNoExiste()
console.log('Si hay un error esto no se capturaria')