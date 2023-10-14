const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  console.log(setOfLanguages)


const companies = new Set() 
console.log(companies.size) // 0

companies.add('Google') 
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) // 5 
console.log(companies)



console.log(companies.delete('Google'))
console.log(companies.size) // 4 


console.log(companies.has('Apple')) // false
console.log(companies.has('Facebook')) // true


companies.clear()
console.log(companies)








countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)


const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)