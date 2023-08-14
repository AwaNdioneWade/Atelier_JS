let container = document.getElementById('container')
let ht = prompt('Donnez le prix HT du produit')
let tva = prompt('Donnez TVA du produit')
let ttc = ht * (tva/100)
container.innerHTML = ttc;