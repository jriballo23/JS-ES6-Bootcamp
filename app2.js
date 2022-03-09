// Iteración #2: Destructuring

console.log("<<<<<<<<Ejercicio 2.1>>>>>>>>");

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}



let { title, gender } = game;


console.log(title);
console.log(gender);



console.log("<<<<<<<<Ejercicio 2.2>>>>>>>>");

// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];


let [ a,b,c ] = fruits;

console.log(a);
console.log(b);
console.log(c);


console.log("<<<<<<<<Ejercicio 2.3>>>>>>>>");

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.



const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};


let {name} = animalFunction();
let {race} = animalFunction();

console.log(name);
console.log(race);

console.log("<<<<<<<<Ejercicio 2.4>>>>>>>>");

// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

const car = {name2: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name2} = car;

let {itv} = car;

let [a1,b2,c3] = itv;



console.log(name2);

console.log(itv);

console.log(a1);
console.log(b2);
console.log(c3);




