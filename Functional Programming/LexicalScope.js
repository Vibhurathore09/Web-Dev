/*Lexical Scoping ->> is a type of object oriented programming according to which , a child can access parent scope and global scope. Similarly a function can access global scope. 



var a = "Hello World ";
function first(){
    var b = "I am Rahul ."
    second();
    function second() {
        var c = "Please subscribe to RAHULISM newsletter "
        console.log(a+b+c);
    }
}


Here the function is called in the child class .So the result clearly shows, when var a is called , the engine looks for it in the child class "second" and moves on to the parent class "first" and then finds the var a in the global scope ultimately .*/