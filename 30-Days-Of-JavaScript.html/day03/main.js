

let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    
let falseValue = 4 < 3  

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf)

const PI = 3.14
let radius = 100          


const areaOfCircle = PI * radius * radius
console.log(areaOfCircle) 


const gravity = 9.81   
let mass = 72            


const weight = mass * gravity
console.log(weight)        

const boilingPoint = 100  
const bodyTemp = 37       



console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`)


console.log(3 > 2)             

console.log(3 < 2)            

console.log(3 == '3')           // true
console.log(3 === '3')          // false

console.log(3 !== '3')          // true
console.log(3 != 3)             // false

console.log(0 == false)         // true
console.log(0 === false)        // false

console.log(0 == '')            // true, equivalent
console.log(0 == ' ')           // true, equivalent
console.log(0 === '')           // false

console.log(1 == true)          // true, equivalent
console.log(1 === true)         // false

console.log(undefined == null)  // true
console.log(undefined === null) // false
console.log(NaN == NaN)         // false
console.log(NaN === NaN)        // false
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false




const check1 = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false



const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false



let check7 = !(4 > 3)                  //  false
let LightOn = true
let isLightOff = !isLightOn           // false
let Married = !false                // true

let count = 0
console.log(++count)        // 1
console.log(count)          // 1

let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)



const now = new Date()
const year = now.getFullYear() 
const month = now.getMonth() + 1
const date = now.getDate() 
const hours = now.getHours()
const minutes = now.getMinutes()
console.log(`${date}/${month}/${year} ${hours}:${minutes}`)