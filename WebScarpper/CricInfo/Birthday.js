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
    //full page search
    let inningsArr =  $(".card.content-block.match-scorecard-table>.Collapsible");
    for(let i = 0 ; i < teamsArr.length; i++)
    {
        //team Namee
        let teamNameElem = $(inningArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        //table Batsman
        let tableElem = $(innigsArr[i]).find(".table.batsman");
        let allBatsMan = $(tableELem).find("tr");
        for(let j = 0 ; j < allBatsMan.length ;j++)
        {
            let allColsOfPlayer = $(allBatsMan[j]).find("td");
            let isbatManCol = $(allColsOfPlayer[0]).hasClass("batsman-cell");
            if(isbatManCol == true)
            {
                let href = $(allColsOfPlayer[0]).find("a").attr("href");
                let name = $(allColsOfPlayer[0]).text();
                let fullink = "https://www.espncricinfo.com" + href;
                getBirthdaypage(fullLink, name , teamName);
            }
        }
    }

}
function getBirthdaypage(url , name , teamName)
{
    request(url , cb);
    function cb(err , response , html)
    {
        if(err){
            console.log(err);
        }
        else{
            extractBirthday(html , name , teamName)

        }
    }
}
function extractBirthday(html, name , teamName)
{
    let $ = cheerio.load(html);
    let detailsArr = $("player-card-desription");
    let birthDay = $(detailsArr[0]).text();
    cconsole.log(`${name} plays for ${teamName} was born on ${birthDay}`);
}