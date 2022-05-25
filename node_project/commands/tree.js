function treeFn(dirPath){
    //let destPath;
    if(dirPath == undefined){
        //console.log("Kindly enter the path");
        treeHelper(process.cwd(), "");
        //process.cwd();
        return;
    }
    else{
        let doesexists = fs.existsSync(dirPath);
        if(doesexists){
                treeHelper(dirPath, "");
        }
        else{
            console.log("Kinfly enter the correct path");
            return;
        }
    }
}
function treeHelper(dirPath , indent)
{
    //is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile == true){
        let fileName = path.basename(dirPath);
        console.log(indent  + " |---- " +fileName);
    }
    else {
        let dirName = path.basename(dirPath);
     //   console.log(indent + "|- - -"+ dirName)
        let childrens = fs.readdirSync(dirPath);
        // console.log(childrens)
        for(let i = 0 ; i< childrens.length ; i++)
        {
            let childPath = path.join(dirPath,childrens[i]);
            treeHelper(childPath , indent+"\t");
        }
    }
}
module.exports = {
    treekey : treeFn
}




