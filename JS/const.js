// const a = 10;
// const arr = [1,2,3,4,5];
// // How is it possible ??
// arr.shift();
// console.log(arr);


// //objects 
// //key : value
// // String, number : valid type
// let object = {
//     name : "Vibhu" , lastname : "Rathore", sayHi :function()
//     {
//         console.log("Vibhu , say's Hi!");
//     }
// }
// console.log(object);
// //


// //loop
// for(let key in object)
// {
//   console.log(key, " -> ",object[key]);
// }
// object.sayHi();


// arrays
let arr = [1,2,3,4,5];
// arr.myprop = "Hello";
// arr.Print = function()
// {
//     console.log("Hello from array");
// }
// console.log(arr);

// for(let key in arr)
// {
//     console.log(key , " : ",arr[key]);
// }
// arr[95] = 100;
// console.log(arr.length);

function fn()
{
    console.log("hello from fn");
}
fn.prop = "Property of funciton";
fn.myFn = function fn()
{
    console.log(" i am a method of a function");
}
fn();
fn.myFn();
console.log(fn.prop);

//function -> object -> key : value
// extra feature -> code property that can be executed when you invoke that



// JS -> primitive or object
// everything object -> Dates , errors , modules
// 6 primitive types -> number , string , boolean ,undefined ,null , symbol