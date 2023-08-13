const divBalises = document.getElementById("balises")
const inputText = document.getElementById("textAInserer")
const inputbalise = document.getElementById("input")
const choosebalise = document.getElementById("choose")
const enonce = document.getElementById("enonce")

function insererbalise(balises, textAInserer) {
    let baliseHTML =  document.createElement('p');
    baliseHTML.innertext = (`Entrez votre texte et choisissez une balise HTML pour l'entourer`);
    enonce.append(baliseHTML.innertext);
    
    choosebalise.addEventListener('click', function(){
        balises = inputbalise.value
        if (inputbalise.value == ""){
        alert('Veillez d\'abord entrer le nom de la balise');
        }else{
            const tabBalisesHTML = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "em", "b"]
            let tableauEnMajuscules = tabBalisesHTML.map(element => element.toUpperCase());

            if (tabBalisesHTML.indexOf(balises) === -1 & tableauEnMajuscules.indexOf(balises) === -1) {
                alert(`Vous devrez mettre une balise HTML qui entoure un texte par exemple la balise p ou h1`);                
            } else {
                    const balise = document.createElement(balises);
                    textAInserer = inputText.value
                    balise.innertext = textAInserer
                    balise.append(textAInserer);        
                    divBalises.append(balise);
            }
            inputbalise.value = "";
            inputText.value = "";
        }
    }) 
}
insererbalise(balises, textAInserer)