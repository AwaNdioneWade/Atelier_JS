function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() // 4
  
function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
}
  
addTwoNumbers() 


  
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
  
console.log(areaOfCircle(10))
  
function square(number) {
    return number * number
}
  
console.log(square(10))



function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
}
sumTwoNumbers(10, 20) 
  
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}
  
console.log(sumTwoNumbers(10, 20))

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))

// function with multiple parameters

function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];

  console.log(sumArrayValues(numbers));
  
  
const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircle(10))
  
​
const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173



function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
  console.log(generateFullName())
  console.log(generateFullName('David', 'Smith'))