const puppeteer = require("puppeteer");
let page;
console.log("Before");
const browserOpenPromise = puppeteer.launch({ headless: false });
browserOpenPromise
    .then(function (browser) {
        const pagesArrPromise = browser.pages();// currently opened tabs
        return pagesArrPromise;
    }).then(function (browserPages) {
        page = browserPages[0];
        //load the google.com page and wait for it to fully load
        let gotoPromise = page.goto("https://www.google.com/", { waitUntil: 'networkidle0' });
        return gotoPromise;
    })//.then(function (){
    //     let elementWaitPromise = page.waitForSelector(".M6CB1c.rr4y5c",{visible : true});
    //     return elementWaitPromise;
    // }).then(function (){
    //     let KeyWillBePressed = page.click(".M6CB1c.rr4y5c");
    //     return  KeyWillBePressed;
    // })
    .then(function(){
        let keyWillBeSendPromise = page.waitForSelector("input[type = 'text']",{visible : true});
        return keyWillBeSendPromise;
    })
    .then(function (){
        //console.log("Reached Google Home Page");
        let keysWillBeSendPromise = page.type("input[type = 'text']","pepcoding");
        return keysWillBeSendPromise;
    }).then(function (){
        let enterWillBePressed = page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function (){
        let elementWaitPromise = page.waitForSelector("h3.LC20lb.DKV0Md",{visible : true});
        return elementWaitPromise;
    }).then(function (){
        let keyWIllBeSendPromise = page.click("h3.LC20lb.DKV0Md");
        return keyWIllBeSendPromise;
    })
    .catch(function(err){
        console.log(err);
    }
    )
console.log("After");