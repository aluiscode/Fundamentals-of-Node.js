function hola(nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(function(){
            console.log('hola,'+nombre);
            resolve (nombre);
        },1000);
    })

}

function hablar(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('bla bla bla bla...');
            resolve();
        },1000);
    })
}

function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('adios',nombre);
            reject ();
        },1000);
    })
}

console.log('Iniciando el Proceso')
hola('Luis')
    .then(hablar)
    .then(adios)
    .then((nombre)=> {
        console.log('Proceso Terminado amo '+nombre)
    }).catch(()=>{
        console.log('Error: ')
    })