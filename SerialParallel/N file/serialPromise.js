const fs = require('fs').promises
let arr = ['f1.txt','f2.txt','f3.txt']

let fileReadPromise = fs.readFile(arr[0])
for(let i = 1 ; i< arr.length; i++){
    fileReadPromise = fileReadPromise.then((data)=>{
        console.log('content -> '+data)
        return fs.readFile(arr[i])
    })
}
fileReadPromise.then((data)=>{
    console.log('content -> ' +data)
})