let i=0;

let interval = setInterval(()=>{
    if(i===3){
        clearInterval(interval)
    }
    console.log('Interval')
    i++
},100)



setImmediate(()=>{
    console.log('Immediate')
})


console.log(process)

console.log(__filename)


global.myVariable= 'Luis Alberto'
console.log(myVariable)