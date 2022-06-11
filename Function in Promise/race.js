let p1 = new Promise(function(resolve , reject){
    reject('Promise 1 is rejected')
})

let p2 = new Promise(function(resolve , reject){
    resolve('Promise 2 is resolved')
})

let p3 = new Promise(function (resolve , reject){
    resolve('Promise 3 is resolved')
})


Promise.race([p1, p2 ,p3]).then((val) =>{
    console.log(val)
}).catch((err) => {
    console.log(err)
})

// Which ever is resoolverd/ returned at first it returns that promise
