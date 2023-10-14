// GetElementById
let title = document.getElementById('main-heading')
title.style.color = 'red'
console.log(title);

// getElementsByClassName
let listItems = document.getElementsByClassName('list-items')
console.log(listItems);

// getElementsByTagName
let listItem = document.getElementsByTagName('li')
console.log(listItem);

// querySelector
let myContainer = document.querySelector('div')
console.log(myContainer);

const ul = document.createElement('ul')
const li = document.createElement('li')
ul.append(li)
myContainer.append(ul)
// li.setAttribute('class', 'list-items')
// // li.removeAttribute('class')
li.innerText = 'X-men'
li.classList.add('list-items')
console.log(li.classList.contains('list-items'));
li.remove()
ul.remove()

// querySelectorAll
let myUl = document.querySelectorAll('.list-items')
for (let i = 0; i < myUl.length; i++) {
    myUl[i].style.fontSize = '2rem'    
}
console.log(myUl);

let firstLi = document.querySelector('.list-items')

console.log(firstLi.innerText);
console.log(firstLi.textContent);
console.log(firstLi.innerHTML);

// parent Node

let myList = document.querySelector('ul')
console.log(myList.parentNode);
console.log(myList.parentNode.parentNode);
console.log(myList.parentElement);
console.log(myList.parentElement.parentElement);

// Child Node
console.log(myList.childNodes);
console.log(myList.firstChild);
console.log(myList.lastChild);

myList.childNodes[1].style.backgroundColor = 'green'


console.log(myList.children);
console.log(myList.previousElementSibling);
console.log(myList.nextElementSibling);


console.log(myContainer.childNodes);