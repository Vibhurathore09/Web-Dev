//Higher Order Function -> Those function which take function as parameters 
// map , filter , reduce


//map
let myArr = [1,2,3,4,5]
let newArr = myArr.map(function(x){
    return x*x
})
console.log(myArr)
console.log(newArr)

//filter 
let filtered = myArr.filter(function (x){
    return x%2==0
})
console.log(filtered)

//reduce 
let reduced = myArr.reduce(function (accumulator , x){
    return accumulator+x
} , 0)
console.log(reduced)