//ANDY F. PAZ ROSERO 2244314

//CHALLENGE 01

import React from 'react';
import { isOddOrEvenRegular, isOddOrEvenArrow } from '../utils/oddEvenFunctions';

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
