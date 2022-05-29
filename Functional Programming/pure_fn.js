// impure function -> those funciton which depend on external factors

// let a = 9 here function addNum depend on value of a

// function addNum(b){
//     console.log('The Sum is ',a+b)
// }

// addNum(2)
// addNum(2) // 


//pure function -> those which will always return the same result with same arguments

function addNumP(a,b) 
{
  //  console.log('the sum is ',a+b)  side effect -> mutating state , that is using external screen to show result
  return a+b;
}
console.log(addNumP(2,3))