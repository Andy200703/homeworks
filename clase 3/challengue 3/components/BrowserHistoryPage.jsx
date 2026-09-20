//ANDY F. PAZ ROSERO 2244314

import React, { useState } from 'react';
import { browserHistory } from '../data/mockData';

// Página 2: Historial del Navegador (Doubly Linked List)
export default function BrowserHistoryPage() {
    // Iniciamos en el último nodo insertado (la página actual)
    const [currentPage, setCurrentPage] = useState(browserHistory.tail);

    const goBack = () => {
        if (currentPage && currentPage.prev) {
            setCurrentPage(currentPage.prev);
        }
    };

    const goForward = () => {
        if (currentPage && currentPage.next) {
            setCurrentPage(currentPage.next);
        }
    };

    return (
        <div style={{ border: '2px solid #0056b3', padding: '20px', marginTop: '20px' }}>
            <h3>Historial del Navegador (Doubly Linked List)</h3>
            <p><strong>URL Actual:</strong> {currentPage ? currentPage.value : "Vacío"}</p>
            
            <button 
                onClick={goBack} 
                disabled={!currentPage || !currentPage.prev}
                style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
            >
                ⬅️ Atrás
            </button>
            <button 
                onClick={goForward} 
                disabled={!currentPage || !currentPage.next}
                style={{ padding: '10px', fontSize: '16px' }}
            >
                Adelante ➡️
            </button>
        </div>
    );
}
