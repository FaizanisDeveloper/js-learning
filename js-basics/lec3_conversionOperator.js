let age=39
//console.log(typeof age) //Number
age="39"
//console.log(typeof age) //string
let stringToNumber=Number(age)
//console.log(typeof stringToNumber)//number
age="39abc"
let ageinNumber=Number(age) 
////console.log(typeof ageinNumber) //number
//console.log(ageinNumber)    //NaN
age=null
let nulltoNumber=Number(age)
//console.log(typeof nulltoNumber) //number
age=undefined
let undefinedtoNumber=Number(age)
//console.log(typeof undefinedtoNumber) //number
//console.log(undefinedtoNumber)//NaN
age=true
//console.log(age)    //true
let booltoNumber=Number(age)
//console.log(typeof booltoNumber) //number
//console.log(booltoNumber)   //1
let isLoggedIn=1
let boolisLoggedIn=Boolean(isLoggedIn)
// console.log(boolisLoggedIn) //true
isLoggedIn=""
let stringtoBool=Boolean(isLoggedIn)
// console.log(stringtoBool)
// console.log(typeof stringtoBool)
isLoggedIn="hello"
let filledStringtoBool=Boolean(isLoggedIn)
// console.log(typeof filledStringtoBool)
// console.log(filledStringtoBool)
let num=33
// console.log(typeof num) //number
let numtoString=String(num)
// console.log(numtoString)    //33
// console.log(typeof numtoString) //string

