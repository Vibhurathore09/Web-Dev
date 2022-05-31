//It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. 
function add(a, b){
    console.log(a+b)
}

let addWith2 = add.bind(this, 2) // this refers to add function and 2 referes to 1st paramter of 2
addWith2(5)
