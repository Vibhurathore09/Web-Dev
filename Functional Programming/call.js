let showDetails = function(city , car){

    console.log(`${this.name} is ${this.age} years old , lives in ${city} and drives ${car}`)
} 

let person1 = {
    name :'Adam',
    age : 25
    // showDetails : function(){
    //     console.log(this.name + " is "+ this.age +" years old")
    // }
}

let person2 = {
    name : 'Steve' ,
    age  : 20
    // showDetails : function(){
    //     console.log(this.name + " is "+ this.age +" years old") to not write this again and again for every funciton call is used
    // }
}



//function borrowing
showDetails.call(person1,"Noida","BMW") 
//Apply -> arguments to be passed should be in Array
showDetails.apply(person2,["Banglore" , "Mercedes"])

//Bind 
let showDetailsBind = showDetails.bind(person2 , 'Noida' , 'BMW')
console.log(showDetailsBind)
showDetailsBind()
// person2.showDetails()