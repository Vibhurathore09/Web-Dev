const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

function customPromise(executor){
    let state = PENDING
    let value = null
    let handlers = []
    let catchers = []


    function resolve(result){
        if(state !== PENDING){
            return;
        }
        state = FULFILLED
        value = result

        handlers.forEach((h) => h(value))
    }

    function reject(err){
        if(state !== PENDING) return;

        state = REJECTED
        value = err
        catchers.forEach((c) => c(value))
    }


    this.then = function(SuccessCallback){
        if(state === FULFILLED){
            SuccessCallback(value)
        }else{
            handlers.push(SuccessCallback)
        }
    }

    this.catch = function(failurecallback){
        if(state == REJECTED){
            failurecallback(value)
        }else{
            catchers.push(failurecallback)
        }
    }


    executor(resolve , reject)

}



const doWork = (res , rej) =>{
    if(2 == 2){
        setTimeout(() => {res('Promise Resolved')},1000);
    }else{
        setTimeout(()=> {rej('Promise rejeected')},1000);
    }
}

let greetMsg = new customPromise(doWork)

greetMsg.then((val) =>{
    console.log("then log "+ val)
})

greetMsg.catch((val) =>{
    console.log('catch log ',val)
})