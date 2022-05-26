let fs = require("fs");
console.log("before");
// fs.readFile("f1.txt" ,function(err, data) {
//     console.log(data);
// });

let promise = fs.promises.readFile("f11.txt");
console.log(promise);
//fulfilled
promise.then(function(data){
    console.log(""+data);
})

//rejected
promise.catch(function (err){
    console.log(err);
})

//promise
console.log("after");