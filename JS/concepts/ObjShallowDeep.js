let obj = {
    name :'Adam',age : 23
}
// let newObj = obj

// newObj.name = 'Steve'
// console.log(obj)
// console.log(newObj)

//----Shallow Copy------

let newObj = {...obj}
newObj.name = 'Steve'
console.log(obj)
console.log(newObj)


//----DEEP COPY-------

let person = {
    name : 'Vibhu',
    age : 33,
    hobbies : ['Sports' , 'coding' , 'music']
}
let newPerson = JSON.parse(JSON.stringify(person))

newPerson.age = 23;
newPerson.hobbies[2] = 'reading'
console.log(person)
console.log(newPerson)