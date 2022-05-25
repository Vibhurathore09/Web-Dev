let cp = require("child_process");
console.log("trying to open our love");
//cp.execFile('calc'); for opening calculator
//cp.execSync("start chrome https:\\www.pepcoding.com") for opening pepcoding site
//cp.execSync("code"); for opening vscode
//cp.execSync("open")console.log("Opened our love");
let output =  cp.execSync("node abc.js");
console.log("output "+ output);