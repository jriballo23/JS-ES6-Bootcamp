// Iteración #3: Spread Operator

console.log("<<<<<<<<Ejercicio 3.1>>>>>>>>");

// 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43];

let pointsList2 = [...pointsList];

console.log(pointsList2);


console.log("<<<<<<<<Ejercicio 3.2>>>>>>>>");
// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

let toy2={...toy};

console.log(toy2);



console.log("<<<<<<<<Ejercicio 3.3>>>>>>>>");
// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.

const list1 = [32, 54, 21, 64, 75, 43];
const list2 = [54,87,99,65,32];

let listSum =[...list1,...list2];

console.log(listSum);

console.log("<<<<<<<<Ejercicio 3.4>>>>>>>>");
// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.

const toy3 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy3Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

let toy3Sum ={...toy3,...toy3Update};

console.log(toy3Sum);

console.log("<<<<<<<<Ejercicio 3.5>>>>>>>>");

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

let colorsUpdate =[...colors];

for (let index = 0; index < colorsUpdate.length; index++) {
    const element = colorsUpdate[index];
    if (element === "amarillo"){
        colorsUpdate.splice(index,1)
    }
    
}

console.log(colorsUpdate);