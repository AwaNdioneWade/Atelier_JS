let str = 'I love JavaScript'
let pattern = /love/
let result = pattern.test(str)
console.log(result) //true


result = str.match(pattern)
console.log(result)

result = str.search(pattern)
console.log(result)

let txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)


txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

let matches = txt.replace(/%/g, '')
console.log(matches)  

pattern = '[Aa]pple'
txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
matches = txt.match(pattern)

console.log(matches)  



pattern = /[a].*/g
txt = 'Apple and banana are fruits'
matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']


txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
pattern = /[Ee]-?mail/g  
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]



txt = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
pattern = /[Ee]-?mail/g 
matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]


txt = 'This regular expression example was made in December 6,  2019.'
pattern = /[^A-Za-z,. ]+/g
matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]


pattern = /^[A-Z][a-z]{3,12}$/;
let name = 'Asabeneh';
result = pattern.test(name)

console.log(result) // true