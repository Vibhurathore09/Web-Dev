function add(x){
    return function(y){
        console.log(x+y)
    }
}

let addWith2 = add(2) // 2 is passed in add function and returned a function 
addWith2(3) // this 3 is passed in returned function 