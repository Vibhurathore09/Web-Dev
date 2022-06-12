const lib = require('./lib')


let amount = 2000
let toCut = 200


function chargeDebitCard(){
    amount = amount-toCut
    console.log(`Remaining amount is ${amount}`)
}
// chargeDebitCard()

// lib.updateAccount('TV' , chargeDebitCard)
let promiseObj = lib.promiseUpdateAccount('Tv').then(chargeDebitCard)