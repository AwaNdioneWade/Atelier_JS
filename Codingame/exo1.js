function caculPuissance(nombre, puissance){
    let result = 1;
    for (let i = 0; i < puissance; i++) {
        result *= nombre;
    }
    return result;
}

nombre = prompt('entrez le nombre que vous voulez calculer sa puissance');
puissance = prompt('Entrez l\'exposent du nombre');
alert(nombre + ' puissance ' + puissance + ' = ' + caculPuissance(nombre, puissance));