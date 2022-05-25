#!/usr/bin/env node
let inputArr = process.argv.slice(2);
const { dir } = require("console");
let fs = require("fs");
let path = require("path");
let helpobj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");
//console.log(inputArr);
let types = {
    media : ["mp4" , "mkv"],
    archive : ['zip' , '7z' , 'rar' , 'tar' , 'gz', 'ar' , 'iso' , "xz"],
    documents : ['docx','js' , 'doc' , 'pdf' , 'xlsx' , 'xls' , 'odt' , 'ods' , 'odp' , 'odg' , 'odf' , 'txt' , 'ps' , 'tex'],
    app : ['exe' , 'dmg' , 'pkg' , 'deb']
}
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help 
let command = inputArr[0];
switch (command)
{
    case "tree":
        treeObj.treekey(inputArr[1]);
        break;
    case "organize":    
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        helpobj.helpkey();
        break;
    default:
        console.log("Please input Right command");
        break;
}



//help fn
