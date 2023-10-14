let espaceAffiche1 = document.getElementById('espaceAffiche')
let espaceAffiche1H1 = document.getElementById('espaceAffiche1H1')
espaceAffiche1H1.innerText = "0";
let espaceAffiche2H1 = document.getElementById('espaceAffiche2H1')
espaceAffiche2H1.innerText = "0";
const boutons = [...document.querySelectorAll('.bouton')]
const keysCode = boutons.map(bouton => bouton.dataset.key)
let resultat = "0"
let stock =""
let calcul
document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calcule(valeur)
})

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calcule(valeur)
})

const calcule = function(valeur){
    if(keysCode.includes(valeur)){
        if (valeur === "8") {
                espaceAffiche1H1.innerText = "0";
                str = ""
        }else if (valeur === "46") {
            espaceAffiche1H1.innerText = "0";
            espaceAffiche2H1.innerText = "0";
            stock = ""
            calcul = 0
            resultat = ""
        }else if (valeur === "13") {
                calcul = eval(resultat)
                espaceAffiche1H1.innerText = calcul
        }else {
            const indexCodeKey = keysCode.indexOf(valeur)
            const bouton = boutons[indexCodeKey]
            espaceAffiche1H1.innerText += bouton.innerHTML
            resultat += bouton.innerHTML
            stock += bouton.innerHTML ;

            if (valeur === "187" || valeur === "109" || valeur === "106" || valeur === "111") {
                espaceAffiche1H1.innerText = bouton.innerHTML
                let str = stock.slice(0, -1)
                console.log(espaceAffiche1H1.innerText);
                espaceAffiche2H1.innerHTML = eval(str)
            }
        }
    }else{
        
    }
}