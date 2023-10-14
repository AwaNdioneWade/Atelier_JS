const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers)) // 15


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)


const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)

const areAllStr = names.every((name) => typeof name === 'string') 

console.log(areAllStr)



const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)


const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const myAge = ages.findIndex((myAge) => myAge < 20)
console.log(myAge) // 5


const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true


const number = [9.81, 3.14, 100, 37]
console.log(number.sort()) //[100, 3.14, 37, 9.81]
number.sort(function (a, b) {
  return a - b
})

console.log(number) // [3.14, 9.81, 37, 100]

number.sort(function (a, b) {
  return b - a
})
console.log(number) //[100, 37, 9.81, 3.14]



const objArr = []
objArr.sort(function (a, b) {
    if (a.key < b.key) return -1
    if (a.key > b.key) return 1
    return 0
  })
  
  // or
  
  objArr.sort(function (a, b) {
    if (a['key'] < b['key']) return -1
    if (a['key'] > b['key']) return 1
    return 0
  })
  
  const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users) 
  // [{…}, {…}, {…}, {…}]