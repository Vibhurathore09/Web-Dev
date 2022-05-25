//filesystem
//files -> create     ,      read       ,      update     ,      delete
//        openSync -w ,      readfileSync      appendFile        unlinkSync
//writefileSync

const { dir } = require("console");
let fs = require("fs");
//read
// let buffer = fs.readFileSync("abc.js");
// console.log("bin data "+buffer);
//create
//fs.openSync("abc.txt", "w");
//no file -> create and file exits -> content repalce
//fs.writeFileSync("abc.txt","hum ajj bhut khush hai");
//fs.writeFileSync("abc.txt", "Hum ajj khush nhi hai");
//fs.writefilesync -> no file -> create  , and file exist -> content replace
//update
//fs.appendFileSync("abc.txt" ," Bhai Khush kyun nhi h ");

//folder 
//create   -> mkdirSync
//read     -> readdirSync
//delete   -> rmdirSync


//fs.mkdirSync("meriDirectory");


//fs.writeFileSync("meriDirectory/merifile.txt","Mera content");
// let content = fs.readdirSync("meriDirectory");
// console.log(content);
// for(let i = 0 ; i < content.length; i++)
// {
//     console.log("file ",content[i], "is removed");
//     fs.unlinkSync("meriDirectory/"+content[i]);
// }

//remove FOlder
//fs.rmdirSync("meriDirectory");

//fs.exitsSync -> If a filesextis at a path -> true , else false;
//fs.lstatSync- > 

// let doesPathExits = fs.existsSync("abc.txt");
// console.log(doesPathExits);
// doesPathExits = fs.existsSync("abcd.txt");
// console.log(doesPathExits);

//fs.lstatSync 

// let detailObj = fs.lstatSync(__dirname + "\\fileSystem.js");

// let ans = detailObj.isFile();
// console.log(ans);
// ans = detailObj.isDirectory();
// console.log(ans);




//C:\Users\Acer\OneDrive\Desktop\JS\abc.js
//C:\Users\Acer\OneDrive\Desktop\JS\abc.txt

// for(let i = 1 ; i <= 10 ;i++)
// {
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
//     fs.writeFileSync(dirPathToMake +"\\"+"readme.md" ,`readme for ${dirPathToMake}` );
// }
 