// let arr = [ 1 ,2 ,3 ,4]

// let cpyArr = arr

// cpyArr[1] = 4  // this will be reflected on both arrays

// console.log(arr)
// console.log(cpyArr)

////------SHALLOW-----
//--------Shallow copy from Spread Operator Method ---------

// let sports = ['Cricket' , ' Football', 'swimmng', {a : 'hockey' , b: 'haha'}]

// let copySports = [...sports]

// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Original Sports array-> ',sports)
// console.log('Copy Sports Array -> ',copySports)

//--------Shallow Copy from the Array.from Method---------

// let sports = ['Cricket' , ' Football', 'swimmng', {a : 'hockey' , b: 'haha'}]

// // let copySports = Array.from(sports)


// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Original Sports array-> ',sports)
// console.log('Copy Sports Array -> ',copySports)

//-------Shallow copy from slice method----------
// let sports = ['Cricket' , ' Football', 'swimmng', {a : 'hockey' , b: 'haha'}]

// let copySports = sports.slice(0)

// copySports[1] = 'Baseball'
// copySports[3]['a'] = 'BasketBall'

// console.log('Original Sports array-> ',sports)
// console.log('Copy Sports Array -> ',copySports)

//---------Deep Copy---------

let sports = ['Cricket' , ' Football', 'swimmng', {a : 'hockey' , b: 'haha'}]

let copySports = JSON.parse(JSON.stringify(sports))

copySports[1] = 'Baseball'
copySports[3]['a'] = 'BasketBall'

console.log('Original Sports array-> ',sports)
console.log('Copy Sports Array -> ',copySports)
