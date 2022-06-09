//-------------Synchornous CallBacks-------------
// function greet(personName , age , callback , callback2){
//     let msg = 'Hello ' + personName
//     // console.log(msg)
//     let ageofPerson = age
//     callback(msg)
//     callback2(ageofPerson)
// }


// function logGreeting(greeting){
//     console.log(greeting)
// }

// function showAge(age){
//     console.log(age)
// }
// greet('steve',23 , logGreeting,showAge)

//------------Asynchronous Callbacks-------------
console.log('Hello')



setTimeout(function st1(){
    console.log('I am st1')
} , 2000)


setTimeout(function st2(){
    console.log('I am st2')
} , 1000)
function sayBye(){
    console.log('bye')
}
sayBye()