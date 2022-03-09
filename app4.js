// Iteración #4: Map

console.log("<<<<<<<<Ejercicio 4,1>>>>>>>>");

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let userMap = users.map((users) => {
    return users.name
});

console.log(userMap);

console.log("<<<<<<<<Ejercicio 4,2>>>>>>>>");

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.

const users2 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


let user2Map = users2.map((users2) => {  
        
    let x = users2.name

   for (const iterator of x) {
      if  (iterator==="A"){
          users2.name="Anacleto";
      }
   }
    return users2
});


console.log(user2Map);

console.log("<<<<<<<<Ejercicio 4,3>>>>>>>>");

// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.


const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let citiesNames = cities.map((cities) => {                 //<<<<< Usamos MAP

    return cities.name

});

console.log(citiesNames);

console.log("Parte 2");


const cities2 = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let citiesNames2 = cities.map((cities2) => {                 //<<<<< Usamos MAP
 
    if (cities2.isVisited === true){
       cities2.name= cities2.name + " Visitado"; 
         
    } else {
        cities2.name= cities2.name + " No Visitado"; 
    }

return cities2

});

console.log(citiesNames2);



console.log("Parte 2v2  Ricardo");

let visited = cities2.map((city) => {
    if (city.isVisited === true){
        return { ...city, already: "Visitado"}
    } else {
        return {...city}
    }
 })
 console.log(visited)