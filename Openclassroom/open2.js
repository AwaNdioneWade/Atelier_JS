let afficher = document.getElementById("message");

const bouton = document.getElementById("bouton");

const ageInput = document.getElementById("age");

const parentalInput = document.getElementById("parental");

let age;
let maxAge = 18;
let controlParentalActive;

function valider(){
  afficher.innerHTML = "Vous êtes autorisé à entrer";
}


function refuser(){
    afficher.innerHTML = "Vous n'êtes pas autorisé à entrer";
}

function onConfirm(){
  
  age = parseInt(ageInput.value);

  if(isNaN(age)){
    afficher.innerHTML = "véillez renseignez un nombre";
    return;
  }

  controlParentalActive = parentalInput.checked;

  if(age < maxAge && controlParentalActive){
    refuser();
  }else{
    valider()
  }

    ageInput.value = "";
}

bouton.addEventListener('click', onConfirm);
