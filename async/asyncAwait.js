async function hola(nombre){
    return new Promise((resolve,reject)=> {
        setTimeout(function(){
            console.log('hola,'+nombre);
            resolve (nombre);
        },1000);
    })
}

async function hablar() {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('bla bla bla bla...');
            resolve();
        },1000);
    })
}

async function adios(nombre) {
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('adios',nombre);
            resolve ();
        },1000);
    })
}

async function main(){
    await hola('Luis')
    await hablar()
    console.log('Estoy siendo sincrono')
    await hablar()
    await adios('Pepito')
}

console.log('Iniciando')
main();
console.log('Terminando')