// Types de données : undefined, null , boolean, string, number, symbol, object
var nom;
console.log(nom);//null
var myName = "Awa";
nom = myName
console.log(nom);//Awa
myName = 8
let age = 8
const pi = 3.14

// MyName != myname =! MYNAME ( conseil déclare comme ceci => myName)

let plus = 8 + 4;
let sous = 8 - 4;
let multi = 8 * 4;
let div = 8 / 4;
let mod = 8 % 4;

let a = 8
a++ // => a = a + 1
a /= 4 // => a = a / 4
let b = 8
b-- // => a = a - 1
b *= 4 // => b = b * 4

let moi = 'je m\'appele Awa Wade'
moi = "je m'appele Awa \"Ndione\" Wade"

// n => nouvelle ligne
// r => carriage return
// t => tabulation
// b => barre oblique inverse
// f => saut de page

let hello = "Bonjour je m'appelle " + nom + " comment-allez vous?"
console.log(nom.length);//3
console.log(nom[1]);//w
nom[2] = "A" // => AwA
console.log(nom.length - 3);//1

function me(prenom, nom, age) {
    let presentation = prenom + ' ' + nom + ' ' + age + 'ans'
    return presentation
}
console.log(me('Awa Ndione', 'Wade', '22'));

let tab = [1, 2, 3]
console.log(tab[1]); // => 2
tab[3] = 4 
console.log(tab); // => tab = [1, 2, 3, 4]


let tab1 = [[1, 2, 3], [4,5,6]]
console.log(tab1[1][0]); // => 4

tab1.push([7])
console.log(tab1);

tab1.pop()
console.log(tab1);

tab1.shift()
console.log(tab1);

tab1.unshift([7])
console.log(tab1);


function myFunction(a, b) {
    console.log(a * b);
}
myFunction(8, 9)

function maFunction(a, b) {
    let somme = a - b
    return somme
}

function nextInline(arr, items) {
    arr.push(items);
    return arr.shift
}
var testArr = [1,2,3]

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

function boleen(verf) {
    if (verf) {
        return "yes"
    }
    return "non"
}
console.log(boleen(true));

function comp(numb) {
    if (numb == 8) {
        return "yes"
    }
    return "non"
}
console.log(boleen(4));

function myMyonne(moyenne) {
    if (moyenne < 10) {
        return "Faible"
    }else if (moyenne = 10) {
        return "Passable"
    }else if (moyenne >= 15) {
        return "Bien"
    }else if (moyenne >= 15) {
        return "Trés bien"
    }else{
        return "Oups"
    }
}

console.log(myMyonne(13));