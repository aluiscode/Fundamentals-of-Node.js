const {exec, spawn} = require('child_process');

exec('ps -f',(err,stdout,stderr)=>{
    if(err){
        console.log('Tuvimos un error')
        return false
    }
    
    console.log(stdout)
})


// //El proceso lo realiza pero no muestra nada de inicio
// let proceso = spawn('ls',['-la'])

// //Para saber si se ejecuto se puede monitorear el objeto
// console.log(proceso.id)
// console.log(proceso.connected)

// //salida, entrada, error
// proceso.stdout.on('data', (dato) => {
//     console.log(dato.toString())
// })

// //Detectar cuando se termin
// proceso.on('exit',() => {
//     console.log(proceso.killed)
//     console.log('El proceso termino')
// })