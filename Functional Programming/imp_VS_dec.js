//is the square of the number is even

//IMpervative Way
// const x = 5;
// const xSquared = x*x;

// let isEven;
// if(xSquared % 2 == 0){
//     isEven = true
// }
// else{
//     isEven = false
// }

// console.log()


//Declarative Way
const isSquareEven = (x) => ((x*x)%2==0 ? true : false)
console.log(isSquareEven(5))
