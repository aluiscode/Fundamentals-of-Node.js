console.time('Todo')
//Bucle 1
let suma1= 0;
console.time('bucle1')

for(let i=0; i< 100000; i++){
    suma1 ++;
}
console.timeEnd('bucle1')


//Bucle 2
let suma2= 0;
console.time('bucle2')
for(let j=1; j< 1000000; j++){
    suma2 ++
}
console.timeEnd('bucle2')

console.time('Asincrono')
asincrona()
    .then(()=>{
        console.timeEnd('Asincrono')
    })

console.timeEnd('Todo')



function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('Termina el proceso asincrono')
            resolve();
        },0)
    })
}

