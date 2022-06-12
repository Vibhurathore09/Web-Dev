const fs = require('fs')

let fileRead1 = fs.promises.readFile('./f1.txt')

let fileRead2 = fs.promises.readFile('./f2.txt')

let fileRead3 = fs.promises.readFile('./f3.txt')

fileRead1.then((data)=>{
    console.log('data -> '+ data)
})

fileRead2.then((data)=>{
    console.log('data -> '+ data)
})

fileRead3.then((data)=>{
    console.log('data -> '+ data)
})