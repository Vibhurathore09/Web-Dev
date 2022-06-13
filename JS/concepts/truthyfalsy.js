// == double equals // loose comparison
let check = 2 == '2' // it is not check type and returning true as both are same value 
// console.log(check)



// === triple equals // Strong comparison
let check2 = 2 === '2'// it checks both type and value so value is same but type are different so it returns false
// console.log(check2)



// --------Truthy Falsy Values--------

let a = 2 // In JS if we assign a value or a filled string value then its boolean value is set as TRUE and these values are known as truthy values
// if(a){
//     console.log('Yes Equals') // that is why this line is being exectued
// }
// else{
//     console.log('no not equal')
// }


function testTruthyFalsy(val){
    return val ? console.log('truthy') : console.log('falsy')
}

testTruthyFalsy(false) // falsy
testTruthyFalsy(true) // truthy
testTruthyFalsy("") // falsy
testTruthyFalsy(0) // falsy
testTruthyFalsy(-1) // truthy -> Number other than zero(0)
testTruthyFalsy(null) //falsy
testTruthyFalsy(undefined) // falsy
testTruthyFalsy(NaN) // falsy'
testTruthyFalsy({}) // empty object / object -> Truthy
//Array , empty array , function ,varianble with value or filled string -> truthy
testTruthyFalsy(new Boolean(false)) // truthy

