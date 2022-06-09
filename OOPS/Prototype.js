let arr = [ 1,2,3,4,5]

;let person = {
    name : "Steve" ,
    age :25,
    showDetails : function(){
        console.log(this.name +' '+this.age)
    }
}

// person.showDetails()

let person2 = {
    name :'Adam'
}
person2.__proto__ = person
console.log(person2.name +" "+person2.age+" "+person2.showDetails())