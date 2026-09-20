//ANDY F. PAZ ROSERO 2244314

// 1. Diferencia investigada:
// Las funciones regulares (Regular Functions) tienen su propio contexto para la palabra reservada 'this',
// mientras que las Arrow Functions heredan 'this' del contexto en el que fueron definidas.
// Adicionalmente, las Arrow Functions permiten una sintaxis más corta (sin la palabra 'function').

// 2. Función Regular (Regular Function)
export function isOddOrEvenRegular(num) {
    if (num % 2 === 0) {
        console.log(`Regular Function: El número ${num} es par (even)`);
    } else {
        console.log(`Regular Function: El número ${num} es impar (odd)`);
    }
}

// 3. Función Flecha (Arrow Function)
export const isOddOrEvenArrow = (num) => {
    if (num % 2 === 0) {
        console.log(`Arrow Function: El número ${num} es par (even)`);
    } else {
        console.log(`Arrow Function: El número ${num} es impar (odd)`);
    }
};
