let p1 = Promise.resolve('Promise Resolved').then((val)=>{
        console.log(val)
})

let p2 = Promise.reject('Promise Reject').then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
})
