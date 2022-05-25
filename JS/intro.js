console.log("Hello jS0");
let a;
console.log(a);
a = 10;
console.log(a);
a = 10.1;
a = "HEllo I am a String";
a = " Hello i am also a String";
console.log("variable contains" ,a);
for(let i=0;i<10;i++)
{
    console.log("Number is " ,i);
}
let number = 23;
let flag = true;
for(let div = 2 ; div < number ; div++)
{
    if(number%div == 0)
    {
        flag = false;
        break;
    }
}
if(flag == true)
    console.log(number, "is prime");
else{
    console.log(number," is not prime");
}