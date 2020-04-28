function hola(name, callback){
    setTimeout(()=>{
        console.log('Soy asincrono')
        callback()
    },1000)
}


console.log('Incio')

hola('Luis',() => {
    setTimeout(() => {
        console.log('Callback modefuckers')
    },1000)
})
console.log('Fin')



//Profe
//funciones
function hola(nombre,miCallback){
    setTimeout(function(){
        console.log('hola,'+nombre);
        miCallback(nombre);
    },1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('bla bla bla bla...');
        callbackHablar();
    },1000);
}

function adios(nombre,otroCallback) {
    setTimeout(function () {
        console.log('adios',nombre);
        otroCallback();
    },1000);
}

function conversacion(nombre,veces,callbackConversacion) {
    if (veces>0) {
        hablar(function(){
            conversacion(nombre,--veces,callbackConversacion);
        });
    } else {
        adios(nombre,callbackConversacion);
    }
}
//ESto es lo que ejecutara todo 
console.log('Iniciando proceso...')
hola("Alexis",function(nombre){
    conversacion(nombre,3,function(){
        console.log("Proceso terminado");
    });
})