let fs = require('fs')
console.log('Before')
fs.readFile('f1.txt',cb)
// fs.readFile('f2.txt',cb2)
// fs.readFile('f3.txt',cb3)
// function cb(err ,content){
//     console.log('content' + content);
// }
// function cb2(err , content){                 This whole code is Parallel
//     console.log('content' + content);
// }
// function cb3(err , content){
//     console.log('content'+content)
// }

//-----------Series version of This code is-----
function cb(err, content){
    console.log('content'+content)
    
    fs.readFile('f2.txt', cb2)
    function cb2 ( err , content){
        console.log('content'+content)

        fs.readFile('f3.txt',cb3)
        function cb3(err , content){
            console.log('content'+content)
        }
    }
}
console.log("After")