const fs = require('fs')


console.log('before')

fs.readFile('./f1.txt' ,cb)

function cb(err , data){
    if(err){
        console.log(err)
    }
    else{
        console.log('content '+  data)
    }
}

console.log('after')