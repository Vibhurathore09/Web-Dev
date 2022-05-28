const puppeteer = require("puppeteer");
const codeObj = require('./codes');
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "vibhurathore09@gmail.com";
const password = "Vibhu@1982";


(async function (){
    try{
        let browserInstance =await puppeteer.launch({
            headless : false,
            args : ['--start-maximized'],

            defaultViewpost:null
        })
        let newTab = await browserInstance.newPage();
        await newTab.goto("https://www.hackerrank.com/auth/login");
        await newTab.type("input[id = 'input-1']", email , {dealy : 50});
        await newTab.type("input[id = 'input-2']", password ,{dealy : 50});
        await newTab.click("button[data-analytics='LoginPassword']",{delay:50});
        await waitAndClick("div[data-automation ='algorithms'", newTab);
        await waitAndClick("input[value='warmup']" , newTab);
        let allChallenges = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled')
        console.log('total question' , allChallenges.length)
        await questionSolver(newTab ,allChallenges[0] , codeObj.answers[0])

    }catch(error){
        console.log(error)
    }
})()
async function waitAndClick(selector , cPage){
    await cPage.waitForSelector(selector)
    let selectorClicked = cPage.click(selector)
    return selectorClicked;
    
}
async function  questionSolver(page ,question , answer){
    await question.click();
    await page.waitForSelector('.monaco-editor.no-user-select.vs');
    await waitAndClick("input.checkbox-input" , page);
    await page.waitForSelector('textarea.custominput' , page)
    await page.type('textarea.custominput', answer , {delay : 10})
    await page.keyboard.down('Control')
    await page.keyboard.press('A',{delay : 100})
    await page.keyboard.press('X',{delay : 100})
    await page.keyboard.up('Control')
    await waitAndClick('.monaco-editor.no-user-select.vs',page);
    await page.keyboard.down('Control');
    await page.keyboard.press('A',{delay : 100})
    await page.keyboard.press('V', {delay : 100})
    await page.keyboard.up('Control');
    await page.click('.hr-monaco__run-code' , {delay :50})
}
// (async () => {
//     try {
//         const browser = await puppeteer.launch({
//             headless: false,
//             args: ['--start-maximized'],
//             defaultViewpost: null
//         })
//         const page = await browser.newPage()
//         await page.goto('https://hackerrank.com/auth/login')
//         await page.type("input[id = 'input-1']", email, { dealy: 50 });
//         await page.type("input[id = 'input-2']", password, { dealy: 50 });
//         await page.click("button[data-analytics='LoginPassword']", { delay: 50 })
//     }
//     catch (error) {
//         console.log(error)
//     }
// })()