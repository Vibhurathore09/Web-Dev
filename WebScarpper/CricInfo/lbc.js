const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"
console.log("Before");
request(url, cb);
function cb(err , response , html)
{
    if(err)
    {
        console.log(err);
    }
    else{
        extractHtml(html);
    }
}
function extractHtml(html)
{
    let $ = cheerio.load(html);
    
    let elemsArr = $(".ci-html-content");
   // console.log(elemsArr);
     let text = $(elemsArr[10]).text();
     console.log(text)
    let htmldata = $(elemsArr[10]).html();
    console.log("text data : ",text);
    console.log("html data : ",htmldata);
}
//console.log("After");