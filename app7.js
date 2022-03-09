
console.log("<<<<<<<< Ejercicio 7.1 >>>>>>>>");
/* 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce(). */

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


var totalScore = exams.reduce(function (accumulator, exam) { 
    return accumulator + exam.score;}, 0);


console.log(totalScore);

console.log("<<<<<<<< Otra manera de hacerlo >>>>>>>>");

const totalScore2 = exams.reduce((acc, exam) => acc + exam.score, 0);

console.log(totalScore2);



console.log("<<<<<<<< Ejercicio 7.2 >>>>>>>>");

/* 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().
 */
const exams2 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


var totalScoreV2 = exams2.reduce(function (acc, item) { 

        if ( item.score >=5 ){
           return  acc + item.score
        }else {
            return acc
        }
           
},0);


console.log(totalScoreV2);






console.log("<<<<<<<< Ejercicio 7.3 >>>>>>>>");
/* 
7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce() 
y muestra por consola la cantidad de alumnos y y la medua de las notas de todos los examenes.
*/



const exams3 = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];



var totalScoreV3 = exams3.reduce( (acc, item) => {

    return  acc + item.score;

},0);

let alumnos = exams3.length;

console.log("Hay " + alumnos + " alumnos!");

console.log("El promedio de notas es " + (totalScoreV3/alumnos));




