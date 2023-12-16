"use strict";   //treat all JS code in newer version

//alert(3+3) Error! We are in NodeJs, not in browser
let personId=2352
let personName="John"
let isLoggedIn=true
let personState=null    //null'data type is object
let personCountry=undefined
//use of typeof keyword
console.log(typeof isLoggedIn)
console.log(typeof personState)
console.log(typeof personCountry)
console.log(typeof undefined)
console.log(typeof null)
//Must insure code readability
// Below is Not a good practice
//console.log("Hello");console.log("John!")

//Datatypes in JS

// Number=> 2 to the power of 53 range
// BigInt=> 1234567992246852146786
// String=> "Hello John!"
// Boolean=> true/false
// Null=> object
// Symbol=>
// Undefined=> undefined Any variable that has not been assigned a value has the value undefined.