const jour = document.getElementById('day');
const mois = document.getElementById('month');
const annee = document.getElementById('year');
const enter = document.querySelector('.fleche')
const ans = document.querySelector('.ans')
const monMois = document.querySelector('.monMois')
const jours = document.querySelector('.jours')
const traits = [...document.querySelectorAll('.trait')]
const today = new Date();
 

// today.setHours(0);
// today.setMinutes(0);
// today.setSeconds(0);
console.log(today);


enter.addEventListener('click', function () {
    let dateAnnif = new Date(annee.value, mois.value-1, jour.value) 
    
    // let ageAnnee = today.getFullYear() - dateAnnif.getFullYear();
    let mesTraits = traits.map(trait => trait.style.background = ('none'))
    mesTraits = traits.map(trait => trait.style.color = ('blueviolet'));
    
    // console.log(ageAnnee);

    const ecart = {
        years: 0,
        months: 0,
        days: 0,
        inDays: 0
    };
    
    const DAY_TIME = 24 * 60 * 60 * 1000;

    ecart.inDays = ((today.getTime() - dateAnnif.getTime()) / DAY_TIME);

    // nombre d'années complétes
    dateAnnif.setFullYear(dateAnnif.getFullYear() + 1);
    while (dateAnnif < today) {
        ecart.years += 1;
        dateAnnif.setFullYear(dateAnnif.getFullYear() + 1);
        ans.innerHTML = ecart.years;
    }
    // réajuste la date en sortie de boucle
    dateAnnif.setFullYear(dateAnnif.getFullYear() - 1);

    // nombre de mois complets
    dateAnnif.setMonth(dateAnnif.getMonth() + 1);
    while (dateAnnif < today) {
        ecart.months += 1;
        dateAnnif.setMonth(dateAnnif.getMonth() + 1);
        monMois.innerHTML = ecart.months;
    }
    // réajuste la date en sortie de boucle
    dateAnnif.setMonth(dateAnnif.getMonth() - 1);

    // on se place sur le jour suivant
    dateAnnif.setDate(dateAnnif.getDate() + 1);
    while (dateAnnif < today) {
        ecart.days += 1;
        dateAnnif.setDate(dateAnnif.getDate() + 1);
        jours.innerHTML = ecart.days;
    }
    
    // affiche résultat
    console.log("Ecart :", ecart);

})






