let liste = document.createElement('ul')

for (let i = 1; i <= 10; i++) {
    let myLi = document.createElement('li')
    myLi.innerText = Math.floor(Math.random() * 11);
    liste.append(myLi)
    if (myLi.innerText == 10) {
        console.log('Le nombre ' + myLi.innerText + ' fait partie du tirage');
    }
}
let container = document.getElementById('container')
container.append(liste)