//Polyfill -> used to provide modern functionality on older browsers that do not natively support it

// Map

let myArr = [1 , 2 , 3 , 4]
let squaredArr = myArr.map(function(x){
    return x*x
})

// console.log(myArr)
// console.log(squaredArr)


// custom Map

function myPolyfillMap(arr , cb){
    let newArr =[]
    for(let i = 0 ;i <arr.length ; i++)
    {
        newArr.push(cb(arr[i]))
    }
    return newArr
}
function square(x){
    return x*x
}

// console.log(myPolyfillMap(myArr , square))


// --------FILTER--------

let fArr = [2,4,6,7,9,13,14,16]

let evenArr = fArr.filter(function (x){
    return x%2 == 0
})
console.log(evenArr)


//---- Custom Filter ----

function myPolyfillFilter ( arr , cb){
    let filteredArr = []
    for(let i = 0 ; i < arr.length ; i++){
        if(cb(arr[i])){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
}
function isEven(x){
    if(x%2==0)
    return x
}

console.log(myPolyfillFilter(fArr , isEven))




//------REDUCE-------