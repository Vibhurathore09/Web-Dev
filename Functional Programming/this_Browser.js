//----------BROWSER--------
//All this is supposed to be done in Browser Console
//------Non - Strict------

// console.log(this)  returns window Object

// function showThis(){
//     console.log(this)
// }
// showThis()  returbs window Object


// let obj = {name :'Adam' ,
// f : function (){
//     console.log(this)
// } }
// obj.f() // returns Object itself


// let obj = {name :'Adam' ,
// f : function (){
//     function g(){
//         console.log(this)
//     }
//     g()
// } }
// obj.f() // returns Window Object 


//-----STRICT--------

// console.log(this)  returns window Object


// function showThis(){
//     console.log(this)
// }
// showThis()  returns undefined


// let obj = {name :'Adam' ,
// f : function (){
//     console.log(this)
// } }
// obj.f() // returns Object itself


// let obj = {name :'Adam' ,
// f : function (){
//     function g(){
//         console.log(this)
//     }
//     g()
// } }
// obj.f() // returns Undefined