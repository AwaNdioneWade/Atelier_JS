 const jour = document.getElementById('day');
const mois = document.getElementById('month');
const annee = document.getElementById('year');
const enter = document.querySelector('.fleche')

const nbrJours = document.getElementById('DD');
const nbrMois = document.getElementById('MM');
const nbrAnnee = document.getElementById('YY');

enter.addEventListener('click', function () {
    calculAge();
    // alert('yes'),
});

const today = new Date();
let day = today.getDate();
let month = 1 + today.getMonth();
let year = today.getFullYear();

const jourMois = [31,28,31,30,31,30,31,31,30,31,30,31];

function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) =>{
        const parent = i.parentElement;
        if (i.value == "") {
            i.style.borderColor = 'red';
            parent.querySelector('small').innerText = "This field is required."
            validator = false;          
        }else{
            if (annee.value > year) {
                annee.style.borderColor = 'red';
                annee.parentElement.querySelector('small').innerText = 'Must be a valid year.';
                validator = false;
            }else{
                annee.style.borderColor = 'black';
                annee.parentElement.querySelector('small').innerText = '';              
                validator = true;
            }
            if (mois.value > 12 || (mois.value > month && annee.value >= year)) {
                mois.style.borderColor = 'red';
                mois.parentElement.querySelector('small').innerText = 'Must be a valid month.';
                validator = false;
            }else{
                mois.style.borderColor = 'black';
                mois.parentElement.querySelector('small').innerText = '';              
                validator = true;
            }
    
            if (jour.value > 31 || (jour.value > day && annee.value == year && mois.value >= month)) {
                jour.style.borderColor = 'red';
                jour.parentElement.querySelector('small').innerText = 'Must be a valid day.';
                validator = false;
            }else{
                jour.style.borderColor = 'black';
                jour.parentElement.querySelector('small').innerText = '';              
                validator = true;
            }
        }

        // else{
        //     i.style.borderColor = 'black';
        //     parent.querySelector('small').innerText = ""               
        //     validator = true;
        // }
    })
    return validator;
}

function calculAge() {
    if (validate()) {
        if (jour.value > day) {
            day = day + jourMois[month - 1];
            month = month - 1;

        }        
        
        if (mois.value > month) {
            month = month + 12;
            year = year - 1;
        }

        nbrAnnee.innerHTML = year - annee.value;
        nbrMois.innerHTML = month - mois.value;
        nbrJours.innerHTML = day - jour.value;

    }    
}


// function joursDansMois(mois, annee) {
//     const mois31Jours = [1, 3, 5, 7, 8, 10, 12];
//     const mois30Jours = [4, 6, 9, 11];

//     if (mois === 2) {
//         if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
//             return 29; // Février en année bissextile
//         } else {
//             return 28; // Février en année non bissextile
//         }
//     } else if (mois31Jours.includes(mois)) {
//         return 31;
//     } else if (mois30Jours.includes(mois)) {
//         return 30;
//     }
// }