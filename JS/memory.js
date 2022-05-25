//window
//console.log(global);
//console.log(this); this is equal to empty object;


//variables
 console.log("a is ",a); // Before declaration it is undefined
 var a ;   // declaration
 console.log("a is ",a); // After declaration it is undefined
 a = 10;  // intializatoin 
 console.log("a is ",a); // after initializtion it's value is given


 // function

 function real()
 {
     console.log("I am real , always run me");
 }
 function real()
 {
     console.log(" Haha , No i am real One");
 }
 function real()
 {
     console.log("You both are wasted , HAha");
 }
 real(); // Because memory is allocated for all three function and last funciton is assigned last so its value will be printed at last always



 // HW
 console.log("VarName ", varname);
 var varname;
 console.log('varname ',varname);
 varname = " vibhu ";
 console.log("varname ",varname);
 fn();
 function fn()
 {
     console.log("Hello from fn");
 }
 fn();
 fncontainer(); // here it will throw an errow as fncontainer is not a funciton yet
 var fncontainer = function()
 {
     console.log(" I am a Expression");
 }
 fncontainer();