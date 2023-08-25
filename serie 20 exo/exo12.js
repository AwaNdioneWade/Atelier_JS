let affiche = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        affiche = affiche + i       
    }
    affiche = affiche + '</br>';
}

document.body.innerHTML = affiche;