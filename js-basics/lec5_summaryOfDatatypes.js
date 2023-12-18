//Primitive Datatypes(Call by Value)

//1: number ; 2: bigint ; 3: string ; 4: boolean ; 5: symbol ; 6: null ; 7: undefined 

// Symbol makes components unique
let symbol_1=Symbol('123')
let symbol_2=Symbol('123')
//console.log(symbol_1 === symbol_2)


//Non-Primitive Datatypes(Call by reference)
// 1: functions
// 2: objects
// 3: array

// Array
// const hero=["Iron-Man","Doctor-Strange","Hulk","Captain-America","Thor"]
// for(let i=0; i<=5; i++){
//     console.log(hero[i])
// }

//Object
let objectData= {
    name:"Umar",
    age:19,
    profession:"Trader",
    ScalpingFunction(){
        console.log("Umar is Scalping in Trading")
    }
}

// console.log(objectData)
// console.log(objectData.name)
// console.log(objectData.ScalpingFunction())