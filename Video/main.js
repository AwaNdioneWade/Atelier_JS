const container = document.querySelector('.click-event')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const reponse = document.querySelector('p')

container.addEventListener('click', function(){
    container.classList.toggle('question-click');
})

btn1.addEventListener('click', function(){
    reponse.classList.add('show-response');
    reponse.style.background = "green";
})
btn2.addEventListener('click', function(){
    reponse.classList.add('show-response');
    reponse.style.background = "red";
    reponse.style.color = "white";
})


const mousemove = document.querySelector('.mousemove')


window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})
window.addEventListener('mousedown', () =>{
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})

window.addEventListener('mouseup', () =>{
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal"
})

container.addEventListener('mouseenter', () => {
    container.style.background = "rgba(0,0,0,0.6"
})

container.addEventListener('mouseout', () => {
    container.style.background = "pink"
    container.style.transform = "rotate(0deg)"
})

container.addEventListener('mouseover', () => {
    container.style.transform = "rotate(-2deg)"
})

// --------------------------------------------------

const keypress = document.querySelector('.keypress');
const key = document.getElementById('key')

document.addEventListener("keypress", (e) => {
    key.textContent = e.key
    if (e.key === "a") {
        keypress.style.background = "pink"
    }else if(e.key === "m") {
        keypress.style.background = "red"
        keypress.style.color = "white";
    }else{
        keypress.style.background = "yellow"
    }
    ring();
})

const ring = () => {
    const audio = new Audio();
    audio.src = "./Enter.mp3";
    audio.play();
}

const nav = document.querySelector('nav');
window.addEventListener("scroll", () => {
    if(window.scrollY > 120){
        nav.style.top = 0;
    }else{
        nav.style.top = "-50px"; 
    }
})




// -----------------------------------------------
const inputName = document.querySelector('input[typt="text]');
const select = document.querySelector('select');
const form = document.querySelector('form');
const nom = document.getElementById('nom');
let langage = "";

// inputName.addEventListener("input", (e) => {
//  pseudo = e.target.value;
// })

select.addEventListener("input", (e) => {
    langage = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(cgv.checked){
        let pseudo = nom.value;
        document.querySelector('form > div').innerHTML = `<h3>Pseudo : ${pseudo}
        <h4>Langage préféré : ${langage}</h4>`;
    }else{
        alert("veillez accepter les CGV")
    }
})

// -----------------------------------------------

window.addEventListener("load", () => {
    console.log("Document chargé")
})

// ---------------------------------------------
const boxes = document.getElementsByClassName("box")

// boxes.forEach((box) => {
//     box.addEventListener('click', (e) => {
//         e.target.style.transform = "scale(0.7)"
//     })
// });


document.body.addEventListener('click', () => {
console.log("click 1");
},
    false
); 
document.body.addEventListener('click', () => {
    console.log('click 2');
},
    true
);

// --------------------------------------

container.addEventListener('click', (e) => {
    e.stopPropagation();
})

// ---------------------------------------

btn2.addEventListener('click', () => {
    confirm("voulez-vous vraiment quitter");
})
btn1.addEventListener('click', () => {
    let answer = prompt("entrez votre nom");
    container.innerHTML += "<h3>Brarvo " + answer + "</h3>"
})

let interval = setInterval( () => {
document.body.innerHTML += ` 
    <div class='box'>
        <h2>Nouvelle boite</h2>
`;
}, 5000)

document.body.addEventListener("click", (e) => {
    e.target.remove();
    clearInterval(interval);
})

// // ------------------------------------------------

window.addEventListener("mousemove", (e) => {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--x", e.layerY + "px");
});