const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
// feature -> request
console.log("Before");
request('https://www.worldometers.info/coronavirus',cb)
console.log("After");
function cb(error, response , html)
{
    if(error)
    {
    console.error('error',error);// Print the error if one occurred
        
    }
    else{
        handlehtml(html);
        //console.log('body',html);//Print the HTML for the google homepage
    }   
}
function handlehtml(html)
{
    let selTool = cheerio.load(html);
    //let h1s = selTool("h1");
    //console.log(h1s.length);
    let array = selTool("#maincounter-wrap span");

    // [i] -> wrap selTool
    // for(let i = 0 ; i<array.length;i++){
    //     let data = selTool(array[i]).text();
    //     console.log(data);
    // }
    let total = selTool(array[0]).text();
    let deaths = selTool(array[1]).text();
    let recovered = selTool(array[2]).text();
    //console.log(h1s.length);
    console.log(chalk.gray("Total Cases: "+total));
    console.log(chalk.red("Total deaths: "+deaths));
    console.log(chalk.green("Total recoverd: "+recovered));
}