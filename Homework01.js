//ANDY F. PAZ ROSERO 2244314

const myArray = [1, 2, 3];
const myArray2 = [4, 5, 6];

// push: Agrega un elemento al final del arreglo
myArray.push(4);
console.log("Push:", myArray); // Resultado: [1, 2, 3, 4]

// pop: Extrae y elimina el último elemento del arreglo
const lastItem = myArray.pop();
console.log("Pop:", lastItem, "Array restante:", myArray); // Resultado: 4, [1, 2, 3]

// concat: Une dos arreglos devolviendo uno nuevo
const myArray3 = myArray.concat(myArray2);
console.log("Concat:", myArray3); // Resultado: [1, 2, 3, 4, 5, 6]

// findLast: Encuentra el último elemento que cumpla con la condición
const last = myArray.findLast(x => x < 2);
console.log("FindLast:", last); // Resultado: 1

// every: Verifica si absolutamente todos los elementos cumplen la condición
const areEvery = myArray.every(x => x < 4);
console.log("Every:", areEvery); // Resultado: true