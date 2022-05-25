const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
console.log("Before");
request(url , cb);
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
    let elemsArr = $(".ds-flex.ds-items-center");
    let WinningTeamName = $(elemsArr[34]).text().trim();
    console.log(WinningTeamName);
    console.log("After");
    let innings =   $(" .ds-mb-4>.ReactCollapse--collapse");

    // let htmlStr = "";
    for(let i = 0 ; i < innings.length;i++)
    {
        // let cHtml = $(innings[i]).html();
        // htmlStr += cHtml;
        //tean names
        let teamNameElem = $(innings[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        console.log(teamName);
        //team table
        if(WinningTeamName == teamName)
        {
            console.log(teamName);
        }
    }
    //console.log(htmlStr);
}