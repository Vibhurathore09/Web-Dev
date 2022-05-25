function sayHi(param)
{
    // console.log("Hello From SayHi");
    // console.log("param recived", param)
    let rval =  Math.random() > 0.5 ? true:"less than 0.5";
    return rval;
}
// sayHi(10);
// sayHi("Hello");
let res = sayHi([1,2,3,4,5]);
console.log("res -> ",res);