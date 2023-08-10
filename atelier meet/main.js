const divBalises = document.getElementById("balises")
const inputbalise = document.getElementById("input")
const choosebalise = document.getElementById("choose")
const enonce = document.getElementById("enonce")


function insererbalise(balises, textAInserer) {
    let baliseHTML =  document.createElement('p');
    baliseHTML.innertext = (`Choisissez une balise HTML`);
    enonce.append(baliseHTML.innertext);
    
    choosebalise.addEventListener('click', function(){
        if (inputbalise.value == ""){
        alert('Veillez d\'abord entrer le nom de la balise');
        }else{
            balises = inputbalise.value
            const balise = document.createElement(balises);
            const textbalise = document.createTextNode(textAInserer);
        
            balise.append(textbalise);        
            divBalises.append(balise);
            
            inputbalise.value = "";
        }
    }) 
}
insererbalise(balises, "Atelier meet")