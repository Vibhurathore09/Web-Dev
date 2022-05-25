let array = [1,2,3,4,5];
console.log(array);
// console.log(array.length);
// let i = 0 ;
// while(i < array.length)
// {
//     console.log("elem at idx", i , "  is ",array[i]);
//     i++;
// }

// push , unshift
// array.push("last value");
// array.unshift("first value");
// console.log(array);
// array.shift();
// array.pop();
console.log(array);

let partofarray = array.slice(2,4);
console.log(partofarray);
console.log(array);
array.splice(2,3);
console.log(array);