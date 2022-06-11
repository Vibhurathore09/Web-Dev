var loader = true
function test(){
    var a = 1+1
    return new Promise(function (resolve , reject){
        if(a === 2){
            resolve('Promise Resolved YEssssssss')
        }else{
            reject('Promise Rejected NOOOOOOOOOOOO')
        }
    })
}

test().then((val)=>{
    console.log(val)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    loader = false // called as cleanup
})