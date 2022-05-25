function organizeFn(dirPath){
    //console.log("Organize commanf implemented for ",dirPath);
    //1. input -> directory path given

    let destPath;
    if(dirPath == undefined){
        destPath = process.cwd();
        return;
    }
    else{
        let doesexists = fs.existsSync(dirPath);
        if(doesexists){
            
            //2. create -> organized_files -> directory
            destPath = path.join(dirPath,"organized files");
            if(fs.existsSync(destPath) == false)
                fs.mkdirSync(destPath);
        }
        else{
            console.log("Kinfly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath,destPath); 

    
    
    
}
function organizeHelper(src , dest)
{
    //3. identity categories of all the files present in that directory ->
    let childName = fs.readdirSync(src);
    //console.log(childName);
    for(let i = 0 ;i < childName.length ; i++)
    {
        let childAddress = path.join(src,childName[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
            //console.log(childName[i]);
            let category =  getCatergory(childName[i]);
            console.log(childName[i], " belongs to --> " , category);
            //4. copy , cut files to that organized directory inside of any of category folder
            sendFiles(childAddress,dest , category);
        }
    }
}
function sendFiles(srcFilePath , dest , category)
{
    let categoryPath  = path.join(dest, category);
    if(fs.existsSync(categoryPath) == false)
    {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath,fileName);
    fs.copyFileSync(srcFilePath , destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ",category);
}
function getCatergory(name)
{
    let ext =  path.extname(name);
    //console.log(ext);
    ext = ext.slice(1);
    for(let type in types)
    {
        let ctypearray = types[type];
        for(let i = 0 ; i < ctypearray.length;i++)
        {
            if(ext == ctypearray[i])
            {
                return type;
            }
        }
    }
    return "others";
}  
module.exports = {
  organizeKey : organizeFn  
}