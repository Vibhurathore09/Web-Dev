class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    showDetails(){
        return this.name
    }
}
class PersonChild extends Person{   //Inheritence
    constructor(){
        super('steve',20)
    }
}
let person1 = new PersonChild()
console.log(person1)
