// //objects (Hashmap) in java -> group of key : value pair
let cap = {name :"Steve"  , lastName: "Rogers" ,
 address: {city : "Manhatten" , state: "New York"} 
 ,age : 35, isAvenger : true ,
  movies : ["frist Avenger ", "winter soldier" , "civil war"] , 
  sayHi : function(){
      console.log("Cay say's Hi");
    }
    };
//     console.log(cap.age);
//     console.log(cap.name);
//     cap.sayHi();
//     console.log(cap.movies[1]);


// console.log("cap:", cap);
//     // Set/UPDATE
//     cap.age = 36;
//     cap.isAvenger = false;
//     cap.friends = ["tony" , "Hulk" , "thor"];
//     console.log("     --- -- ----   ");
//     console.group("cap:",cap)

//     //Delete
//     delete cap.address;
//     console.log(cap.address);

    for(let key in cap)
    {
        console.log(key , " : " , cap[key]);
    }
