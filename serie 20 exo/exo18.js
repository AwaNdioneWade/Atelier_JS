let liste = document.createElement('ul')
let compteur = 0

for (let i = 1; i <= 10; i++) {
    let myLi = document.createElement('li')
    myLi.innerText = Math.floor(Math.random() * 11);
    liste.append(myLi)
    if (myLi.innerText == 10) {
        compteur++
        console.log('Le nombre ' + myLi.innerText + ' est revenu ' + compteur + ' fois pendant le du tirage');
    }
}
let container = document.getElementById('container')
container.append(liste)