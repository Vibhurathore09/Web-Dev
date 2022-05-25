//TDZ (Temporal Dead Zone)
 // Error -> Cannot excess variable before initialization
//
console.log("Hello");
console.log("varName on line number 5",varName);
// declare
let varName ;
// defaults -> undefined
console.log("VarName on line number 2",varName);
varName = 10;
varName = 20;
console.log("varName on line number 7",varName);
// let varname ; cannot be redecalred 
// it will throw error at starting as during it must have seen two let declartion same variables 


//const -> cane be reassigned or redeclared 
// need to be initialized at the time of declaration
const a = 10;
console.log(a);