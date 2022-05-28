const puppeteer = require("puppeteer")

function palceOrder(drink){
    return new Promise(function (resolve ,reject){
        if(drink == 'coffee')
        {
            resolve('Order Placed')
        }
        else{
            reject('Sorry we only serve Coffee')
        }
    })
}

function processOrder(order){
    return new Promise(function (resolve){
        console.log("Order in being processed ")
        resolve(`Coffee Served for the ${order}`)
    })
}


//Scenario with Promises


// palceOrder('coffe').then(function (orderFromCustomer){
//     console.log('request Recieved')
//     let orderIsProcessed = processOrder(orderFromCustomer)
//     return orderIsProcessed;
// }).then(function (orderIsProcessed){
//     console.log(orderIsProcessed)
// }).catch(function(err){
//     console.log(err)
// })


//Async-await

async function serveOrder(){
    try{
        const orderrecieved = await palceOrder('tea')
    console.log(orderrecieved)
    const ProcessOrder = await processOrder(orderrecieved)
    console.log(ProcessOrder)
    }
    catch(error){
        console.log(error)
    }
    
}
serveOrder()