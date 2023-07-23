// Créer un tableau
let fruits = ['Apple', 'Banana'];

console.log(fruits.length);

console.log('Accéder (via son index) à un élément du tableau');
let first = fruits[0];
console.log(first);
let last = fruits[fruits.length - 1];
console.log(last);

console.log('Boucler sur un tableau');
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

console.log('Ajouter à la fin du tableau');
fruits.push('Orange');
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

console.log('Supprimer le dernier élément du tableau');
fruits.pop();
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

console.log('Supprimer le premier élément du tableau');
fruits.shift();
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

console.log('Ajouter au début du tableau');
fruits.unshift('Strawberry')
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

console.log('Trouver l\'index d\'un élément dans le tableau');
fruits.push('Mango');
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});
let pos = fruits.indexOf('Banana');
console.log(pos);

console.log('Supprimer un élément par son index');
let removedItem = fruits.splice(pos, 1); // supprime 1 élément à la position pos
fruits.forEach(function(item, index, array) {
    console.log(item, index);
});

console.log('Supprimer des éléments à partir d\'un index');
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);

pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n);

console.log(vegetables);

console.log(removedItems);
// ["Turnip", "Radish"] (splice retourne la liste des éléments supprimés)

console.log('Copier un tableau');
let shallowCopy = fruits.slice();
console.log(shallowCopy);

console.log('Accéder aux éléments d\'un tableau');
let arr = ["le premier élément", "le deuxième élément", "le dernier élément"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[arr.length - 1]);

console.log('Accéder aux éléments d\'un tableau');
let promise = {
    'var' : 'text',
    'array': [1, 2, 3, 4]
};
console.log(promise['var']);
  
console.log('Relation entre length et les propriétés numériques');
fruits = [];
fruits.push("banane", "pomme", "pêche");
console.log(fruits.length);
fruits[5] = "mangue";
console.log(fruits[5]);
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6 

console.log('Création d\'un tableau utilisant le résultat d\'une correspondance');
// Matche un "d" suivit par un ou plusieurs "b" et suivit d'un "d"
// Capture les "b" et le "d" qui suit
// Ignore la casse

let maRegexp = /d(b+)(d)/i;
let monTableau = maRegexp.exec("cdbBdbsbz");

console.log(monTableau);
// [ 0:"dbBd", 1:"bB", 2:"d", index:1, input:"cdbBdbsbz", length:3 ]

console.log('');
let tableauMsg = [];
tableauMsg[0] = 'Coucou';
tableauMsg[99] = 'monde';
console.log(tableauMsg);
console.log('La longueur du tableau vaut ' + tableauMsg.length);

console.log('Créer un tableau à deux dimensions');
let plateau = [
    ['T','C','F','R','K','F','C','T'],
    ['P','P','P','P','P','P','P','P'],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' '],
    ['p','p','p','p','p','p','p','p'],
    ['t','c','f','k','r','f','c','t'] 

];
  
console.log(plateau.join('\n') + '\n\n');
// On déplace le pion de deux cases en avant 2
plateau[4][4] = plateau[6][4];
plateau[6][4] = ' ';
console.log(plateau.join('\n'));

console.log('Utiliser un tableau pour tabuler un ensemble de valeurs');
values = [];
for (let x = 0; x < 10; x++){
 values.push([
  2 ** x,
  2 * x ** 2
 ])
};
console.table(values)

