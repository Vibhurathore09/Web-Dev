//2105 es6
// hoisting 
console.log("Line number 3",varName);
//declare
var varName;
//assign
varName = 10;
console.log("Line number 8",varName);
//reassign
varName = 20;
console.log("line number 13", varName);
var varName;
console.log("line number 13",varName);