// if(true) {
//     console.log("Hello");
//     console.log("hello again");
// }
//  {} -> Block

// let fruits = "apple"; // Global fruits 
// console.log(fruits);
// {
//     //console.log(fruits); // temporal dead zone as fruits is not yet declared in this block.
//     let fruits ; // new memory allocated for this fruits 
//     console.log(fruits); // undefined
//     fruits = "orange";
//     console.log(fruits); // orange
// }
// console.log(fruits);



//variable shadowing -> Legal
// let fruits = "apple";
// console.log(fruits);
// {
//     let fruits ;
//     fruits = "orange";
//     {
//         console.log(fruits);
//     }
//     console.log(fruits);
// }
// console.log(fruits);



// //variable shadowing -> ILLegal (let outisde and var inside)
// let fruits = "apple";
// console.log(fruits);
// {
//     var fruits = "orange";
//     console.log(fruits);
// }
// console.log(fruits);
