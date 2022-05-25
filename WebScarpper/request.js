const request = require("request");

// feature -> request
console.log("Before");
request('https://www.worldometer.info/coronavirus',cb)
console.log("After");
function cb(error, response , html)
{
    console.error('error',error);// Print the error if one occurred
    console.log('statuscode:' ,response && response.statusCode);//Print the response status code it a response was received
    console.log('body',html);//Print the HTML for the google homepage
}