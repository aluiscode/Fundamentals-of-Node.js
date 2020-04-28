const bcrypt = require('bcrypt')
const password = '1234segura'

// //Ecnriptar
//Callback
const cifrada = bcrypt.hash(password,5, (err,hash)=>{
    console.log('Callback')
    console.log(hash)
})

//Async
async function getCryptpassword(password){
    console.log('Await')
    const cifrada = await bcrypt.hash(password,5)
    console.log(cifrada)
    return cifrada
}
getCryptpassword(password)


//Desencriptar
//Callback
const descifrar = bcrypt.hash(password, 5, (err,hash)=>{
    console.log(hash)
    bcrypt.compare('1234segura', hash,(err,res) => {
        // console.error(err)
        console.log(res)
    })
})

//Async
async function getCompare(password){
    const hash = await getCryptpassword(password)
    const isEqual = await bcrypt.compare(password, hash)
    console.log(isEqual)
}

getCompare('1234segura')