let liste = document.createElement('ul')

for (let i = 1; i <= 10; i++) {
    let myLi = document.createElement('li')
    myLi.innerText = Math.floor(Math.random() * 100);
    liste.append(myLi)
}
let container = document.getElementById('container')
container.append(liste)