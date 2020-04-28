//que nos guarde un espacio pero esta vacio al mostrarlo
let buffer = Buffer.alloc(1)
console.log(buffer)

//Guardar un array y un String enformato de Buffer
let bufferArray = Buffer.from([1,2,3])
let bufferString = Buffer.from('Hello World')
//Buffer
console.log(bufferArray)
console.log(bufferString)
//Human Lenguaje
console.log(bufferArray.toJSON().data)
console.log(bufferString.toString())


//ABC
let abc = Buffer.alloc(26)
console.log(abc)

//Abecedario
for(let i=0; i<26; i++){
    abc[i] = i + 97;
}
console.log(abc.toString())