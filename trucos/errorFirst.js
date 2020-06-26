function asincronia(callback){
    setTimeout(()=>{
        try{
            let a= 3+ z
            callback(null,a)
        }catch(e){
            callback(e)
        }
    },100)
}

asincronia((error,dato)=>{
    //Primero se maneja el error
    if(error){
         console.error('Tenemos un error')
        console.error(error)
        return false
    }
    console.log('Todo esta bien, mi dato es: ',dato)
})