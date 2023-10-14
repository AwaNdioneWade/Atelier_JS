const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) // 1 2 3


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
const [frontEnd, backEnd] = fullStack
  
console.log(frontEnd) // ["HTML", "CSS", "JS", "React"]
console.log(backEnd) // ["Node", "Express", "MongoDB"]

const number = [1, 2, 3]
let [one, , three] = numbers 

console.log(one, three) //1 2



const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  // Asabeneh Brook David John



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest) //1 2 3 
                 // [4, 5, 6, 7, 8, 9, 10]


const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
} //Finland Helsinki
 // Sweden Stockholm
 // Norway Oslo




const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle
  
console.log(w, h, a, p) // 20 10 200 undefined


let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter) //20 10 200 60


const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60




const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}


const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))



const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
} // Prepare JS Test 4/1/2020 8:30 true
 // Give JS Test 4/1/2020 10:00 false
 // Assess Test Result 4/1/2020 1:00 false



const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers) // [0, 2, 4, 6, 8, 10]
                         // [1, 3, 5, 7, 9]
                         // [0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]


const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser) // {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

