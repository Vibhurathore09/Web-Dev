//----Set Interval ka PolyFill




function createSetInterval() {
    let intervalId = 0;
    let intervalMap = {

    }
    function setIntervalPolyfill(callback, delay = 0, ...args) {
        var id = intervalId++

        function repeat() {
            intervalMap[id] = setTimeout(() => {
                callback(...args)

                if (intervalMap[id]) {
                    repeat()
                }
            }, delay);
        }
        repeat()
        return id
    }
    function clearIntervalPolyfill(intervalId){
        clearTimeout(intervalMap[intervalId])
        delete intervalMap(intervalId)
    }



    return {
        setIntervalPolyfill,
        clearIntervalPolyfill
    }
}





const {
    setIntervalPolyfill,
    clearIntervalPolyfill
} = createSetInterval

let counter = 0
let intervalid
function greeting(){
    counter++
    console.log('hiii')
    if(counter>=3){
        clearIntervalPolyfill()
    }

}

intervalid = setIntervalPolyfill(greeting , 2000)