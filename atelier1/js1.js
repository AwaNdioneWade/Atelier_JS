let x = "awa";
let y = 22;
let z = "je m'appelle " + x + " j'ai " + y + "ans";
console.log(z);
// alert(z);

let a = 20;
console.log(a.toString());
console.log(typeof a.toString());

let date = new Date();
let jour = date.getDay();
let mois = date.getMonth();
let years = date.getFullYear();
console.log(date);
let today = jour + "-"+ mois + '-' + years;
console.log(today);

a = 8;
let b = 4;
let c = 1;
let r = a + b + c;
console.log("la somme est égale à " + r);