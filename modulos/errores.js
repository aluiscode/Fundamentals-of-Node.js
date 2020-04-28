function otraFuncion(){
    return seRompe()
}

function seRompe(){
    return 3 + z
}

function seRompeAsincrona(cb){
    setTimeout(() => {
        try{
            return 3 + z
        }catch(error){
            console.error('Error se rompe Asincrona')
            cb(error)
        }
    },1000)
}

try{
    seRompeAsincrona(() => {
        console.log('Hay error')
    })
}catch(error){
    console.error('Algo se ha roto')
    console.error(error)
}

console.log('El final')