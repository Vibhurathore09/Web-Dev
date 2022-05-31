// A closure is a function having access to the parent scope, even after the parent function has closed. 
function add(){
    let a = 4

    function addChild(){
        console.log(a+5)
    }
    return addChild()
}
let catchAdd = add()
console.log(catchAdd)
// console.log(catchAdd())



