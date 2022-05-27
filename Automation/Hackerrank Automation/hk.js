const puppeteer = require("puppeteer");
const codeObj = require('./codes');
const loginLink = "https://www.hackerrank.com/auth/login";
const email = "vibhurathore09@gmail.com";
const password = "Vibhu@1982"


let browserOpen = puppeteer.launch({
    headless : false,
    args : ['--start-maximized'],

    defaultViewpost:null
});

let page ;

browserOpen.then(function (browserObj){
    let browserOpenPromise  = browserObj.newPage();
    return browserOpenPromise;
}).then(function (newTab){
    page = newTab;
    let hackerrankOpenPromise = newTab.goto(loginLink);
    return hackerrankOpenPromise;
}).then(function (){
    let emailIsEntered = page.type("input[id = 'input-1']", email , {dealy : 50})
    return emailIsEntered;
}).then(function(){
    let passwordIsEntered = page.type("input[id = 'input-2']", password ,{dealy : 50})
    return passwordIsEntered;
}).then(function (){
    let loginButtonClicked = page.click("button[data-analytics='LoginPassword']");
    return loginButtonClicked;
}).then(function (){
    let clickOnAlgoPromise = waitAndClick("div[data-automation ='algorithms']",page)
    return clickOnAlgoPromise;
}).then(function(){
    let getToWarmUp = waitAndClick("input[value='warmup']" , page);
    return getToWarmUp;
}).then(function(){
    let watiFor3Seconds = page.waitFor(3000);
    return watiFor3Seconds;
}).then(function (){
    let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled' , {dealy : 50})
    return allChallengesPromise;
}).then(function(questionArr){
    console.log("number of question ", questionArr.length);
    let questionBeSolve = questionSolver(page , questionArr[0],codeObj.answers[0]);
    return questionBeSolve;
})



function  questionSolver(page ,question , answer){
    return new Promise(function (resolve , reject){
        let questionWillBeCLicked = question.click()
        questionWillBeCLicked.then(function (){
            let EditorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page);
            return EditorInFocusPromise;
        }).then(function (){
            return waitAndClick("input.checkbox-input" , page)
        }).then(function (){
            return page.waitForSelector('textarea.custominput' , page)
        }).then(function(){
            return page.type('textarea.custominput', answer , {delay : 10})
        }).then(function (){
            let ctrlIsPressed = page.keyboard.down('Control')
            return ctrlIsPressed
        }).then(function(){
            let AisPressed = page.keyboard.press('A',{delay:100});
            return AisPressed;
        }).then(function (){
            let xIsPressed = page.keyboard.press('X', {delay : 100})
            return xIsPressed;
        }).then(function(){
            let CtrlIsUnPressed = page.keyboard.up('Control');
            return CtrlIsUnPressed;
        }).then(function(){
            let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs',page);
            return mainEditorInFocus;
        }).then(function(){
            let ctrlIsPressed = page.keyboard.down('Control');
            return ctrlIsPressed;
        }).then(function(){
            let AisPressed = page.keyboard.press('A',{delay : 100})
            return AisPressed;
        }).then(function (){
            let VisPressed = page.keyboard.press('V',{delay : 100})
            return VisPressed;

        }).then(function (){
            let CtrlIsUnPressed = page.keyboard.up('Control');
            return CtrlIsUnPressed;
        }).then(function(){
            return page.click('.hr-monaco__run-code' , {delay :50})
        }).then(function (){
            resolve()
        }).catch(function (err){
            reject()
        }
            
        )
    })
}


function waitAndClick(selector , cPage){
    return new Promise(function (resolve , reject ){
        let waitForModelPromise = cPage.waitForSelector(selector)
        waitForModelPromise.then(function(){
            let clickModal = cPage.click(selector)
            return clickModal;
        }).then(function (){
            resolve()
        }).catch(function (err){
            reject();
        })
    })
}