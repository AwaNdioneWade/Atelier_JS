const divBalises = document.getElementById("balises")
const inputText = document.getElementById("textAInserer")
const inputbalise = document.getElementById("input")
const choosebalise = document.getElementById("choose")
const enonce = document.getElementById("enonce")
const texte = document.getElementById("text")

function insererbalise(balises, textAInserer) {
    let baliseHTML = document.createElement('h4');
    baliseHTML.innerHTML = (`Entrez votre texte et choisissez une balise HTML pour l'entourer`);
    enonce.append(baliseHTML);
    
    choosebalise.addEventListener('click', function(){
        balises = inputbalise.value.toLowerCase();
        if (inputbalise.value == ""){
        alert('Veillez d\'abord entrer le nom de la balise');
        }else{
            const tabBalisesHTML = ["a", "abbr", "address", "applet", "area", "article", "acronym", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "link", "main", "map", "mark", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "param", "picture", "pre", "progress", "p", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "strike", "style", "sub", "span", "summary", "sup", "em", "b", "li", "td", "tr", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "strong"]
         
            // let tableauEnMajuscules = tabBalisesHTML.map(element => element.toUpperCase());

            if (tabBalisesHTML.indexOf(balises) === -1 ) {
                alert(`Vous devrez mettre une balise HTML valide exemple la balise p ou h1`);                
            } else {
                    const balise = document.createElement(balises);
                    textAInserer = inputText.value
                    balise.innertext = textAInserer
                    balise.append(textAInserer);        
                    text.append(balise);
            }
            inputbalise.value = "";
            inputText.value = "";
        }
    })   
}
insererbalise(balises, textAInserer)