let container = document.getElementById('container')
let ht = prompt('Donnez le prix HT du produit')
let tva = prompt('Donnez TVA du produit')
// let number = 100
let ttc = ht * (tva/100)
container.innerHTML = ttc;
if (ttc < 100) {
    container.style.color = "red"
}else {
    container.style.color = "yellow"
}