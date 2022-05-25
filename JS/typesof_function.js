// Types of Function ->
// Function statement 
//define
// function sayHello(param)
// {
//     console.log("hello",param);
//     return "Vibhu Rathore";
// }

//fn invocation
// sayHello(10);
// console.log("'''''''''''''");
// sayHello("Hello");
// console.log("'''''''''''''");
// sayHello([1,2,3,4]);
// console.log("'''''''''''''");
// sayHello({name : "Vibhu"});
// console.log("'''''''''''''");

// let rval = sayHello();
// console.log("rval" , rval);


// Fucntion are First Class Citizens -> They are treated as variables \
// assignment
// let a =[12,3,4,5];
// let b  = a ;
// console.log(b);

//Funciton Expression
// let fncontainer = function fn()
// {
//     console.log("I am Expression");
//     console.log("I am an Anonymous funciton")
// }
// fncontainer();


// IIFE -> Immdeiately Invoked Funciton expression
//use - >  require ., pollution

// (function fn()
// {
//     console.log("I am IIFE");
//     console.log("i WIll run on my own");
// })();


// Arrow Function -> Syntax , react , this 
// let fn = num => num * num;
// console.log(fn(4));


// First Class Citizen
// Function are treated as a variable
// 1. assignment -> fn expression
// 2. variable can be passed as a parameter
// 3. function can be passed as a parameter -> fp , hof, callbacks
// 4. Function can be returned from a function -> closure
// function sayHello(param)
// {
//     console.log("hello",param);
//     param();
//     return "Vibhu Rathore";
// }
// //address
// function smaller()
// {
//     console.log("Hello i am smaller");
// }

// // sayHello([1,2,3,4]);
// let rval = sayHello(smaller);
// console.log(rval);

function outer(){
    console.log("I am outer returning inner");
    return function inner()
    {
        console.log("I am inner");
    }
}
let rval = outer();
console.log("Rval",rval);
rval();