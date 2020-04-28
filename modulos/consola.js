// console.log('Algo')
// console.info('Algo')
// console.error('Aqui va el error')
// console.warn('Aqui va el warning')


// var tabla = [
//     {
//         a: 1,
//         b: 'Fran'
//     },
//     {
//         a: 2,
//         b: 'Juanda'
//     }
// ]

// console.table(tabla);


// console.group('conversacion');
// console.log('hola');
// console.group('bla');
// console.log('bla bla bla');
// console.log('bla bla bla');
// console.log('bla bla bla');
// console.groupEnd('bla');
// console.log('adios');
// console.groupEnd('conversacion');

// console.log('otra cosa');




function funcion1(){
    console.group();
    console.log('Esto es de la función 1')
    console.log('Esto también')
    console.log('Esto también')
    funcion2();
    console.groupEnd();
}

function funcion2(){
    console.group();
    console.log('Ahora estamos en la función 2')
    console.groupEnd();
}

console.log('Iniciamos')
funcion1()



console.count('Veces')
console.count('Veces')
console.count('Veces')
console.count('Azul')
console.count('Veces')
console.countReset()
console.count('Veces')
