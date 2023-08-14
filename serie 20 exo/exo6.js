let container = document.getElementById('container')
let ht = prompt('Donnez le prix HT du produit')
let tva = prompt('Donnez TVA du produit')
let number = 50
let ttc = ht * (tva/100)
container.innerHTML = ttc;
if (ttc < number) {
    container.style.color = "red"
}else {
    container.style.color = "yellow"
}