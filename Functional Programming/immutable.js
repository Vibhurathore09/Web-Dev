const person1 = {
    name : 'Adam', 
    Age : 20
}

// const person2 = person1
const person2 = Object.assign({},person1) // or use Spread operator

const person = {...person1} // Spread Operator , creates another reference for person
person2.name = 'Steve'  //data is mutated in person1 as well
person.name = 'Vibhu'
console.log(person)    
console.log(person1)  //{ name: 'Steve', Age: 20 }
console.log(person2) //{ name: 'Steve', Age: 20 }