const url  = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
//venue date opponent ersult runs balls fourse sixes balls 
const cheerio = require("cheerio");
const request = require("request");
request(url , cb);
function cb(err , response , html)
{
    if(err){
        console.log(err);
    }
    else{
        extractLink(html);
    }
}

function extractLink(html)
{
    let $ = cheerio.load(html);
    let link = "series/ipl-2020-21-1210595/match-results";
    let fullink = "https://www.espncricinfo.com/"+link;
    // console.log(fullink);
    getAllMatchesLink(fullink);
}
function getAllMatchesLink(url)
{
    request(url ,function(err , response , html)
    {
        if(err){
            console.log(err);
        }
        else{
            extractLink(html);
        }
    })
}
function extractLink(html)
{
    let $ = cheerio.load(html);
    //let hrefdetails = $('div[id="list"]').find('div > div > div > div > div > div > div > div > div > div > >div > div > span > a')
    let hrefdetails= $('span.ds-text-compact-xs.ds-font-medium')
    // .each(function (index, element) {
    //     list.push($(element).attr('href'));
    //   });
    console.log(hrefdetails);
    
}