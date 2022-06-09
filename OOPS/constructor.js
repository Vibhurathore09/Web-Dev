// let car1 = {
//     brand : "BMW" ,
//     model : "X5" ,
//     color : "white"
// }
//  to stop this repetion of objects we make constructor funciton
// let car2 = {
//     brand : "Mercedes",
//     model : "S Class",
//     color : 'black'
// }
// Constructor Function 

function car(brand , model , color){
    this.Brand = brand
    this.Model = model
    this.color = color

    this.drive = function (){
        console.log( "I am Driving "+this.Model)
    }
}

let car1 = new car('BMW','X5','Black') /// this - {} returns empty object
let car2 = new car('Mercedes' , 'S Class','White')
car1.Brand = 'Jaguar';
// console.log(car1)
// console.log(car2)

car1.drive()
car2.drive()