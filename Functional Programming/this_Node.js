//---------NODE JS-------------

//-----non - strict-----
//This keyword in non - strict mode in Node JS


// console.log(this) // returns an empty object

// function showThis(){
//     console.log(this)
// }
// showThis()  // returns GLobal Object


// let obj = {name : "Adam",
// f: function(){
//     console.log(this)
// } }
// obj.f()  // returns object itself


// let obj = {name : 'Adam' , 
// f: function (){
//     function a (){
//         console.log(this)
//     }
//     a()
// }}
// obj.f() // returns Global Object


//--------strict-------
'use strict'

// console.log(this)  // return empty Object



// function showThis()
// {
//     console.log(this)
// }
// showThis() // return undefined 



// let obj = {name : "Adam",
// f: function(){
//     console.log(this)
// } }
// obj.f()  // returns object itself



// let obj = {name : 'Adam' , 
// f: function (){
//     function a (){
//         console.log(this)
//     }
//     a()
// }}
// obj.f()  // return undefined

