//ANDY F. PAZ ROSERO 2244314

import React from 'react';

//CHALLENGE 01

// 1. Diferencia investigada:
// Las funciones regulares (Regular Functions) tienen su propio contexto para la palabra reservada 'this', 
// mientras que las Arrow Functions heredan 'this' del contexto en el que fueron definidas. 
// Adicionalmente, las Arrow Functions permiten una sintaxis más corta (sin la palabra 'function').

// 2. Función Regular (Regular Function)
function isOddOrEvenRegular(num) {
    if (num % 2 === 0) {
        console.log(`Regular Function: El número ${num} es par (even)`);
    } else {
        console.log(`Regular Function: El número ${num} es impar (odd)`);
    }
}

// 3. Función Flecha (Arrow Function)
const isOddOrEvenArrow = (num) => {
    if (num % 2 === 0) {
        console.log(`Arrow Function: El número ${num} es par (even)`);
    } else {
        console.log(`Arrow Function: El número ${num} es impar (odd)`);
    }
}

export default function Challenge01() {
    const handleRegular = () => {
        isOddOrEvenRegular(4); // Prueba Par
        isOddOrEvenRegular(7); // Prueba Impar
    };

    const handleArrow = () => {
        isOddOrEvenArrow(10); // Prueba Par
        isOddOrEvenArrow(15); // Prueba Impar
    };

    return (
        <div>
            <h2>Challenge 01 - Functions (Odd or Even)</h2>
            <p>Abre la consola del navegador para ver los resultados.</p>
            <button onClick={handleRegular}>Probar Regular Function</button>
            <button onClick={handleArrow}>Probar Arrow Function</button>
        </div>
    );
}
