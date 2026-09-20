//ANDY F. PAZ ROSERO 2244314

//CHALLENGE 03

import React, { useState } from 'react';
import MusicPlayerPage from './MusicPlayerPage';
import BrowserHistoryPage from './BrowserHistoryPage';

// Componente Principal Enrutador
export default function Challenge03() {
    const [activePage, setActivePage] = useState('music');

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
            <h2>Challenge 03 - Navegación con Listas Enlazadas</h2>
            <div style={{ marginBottom: '20px' }}>
                <button 
                    onClick={() => setActivePage('music')}
                    style={{ marginRight: '10px', fontWeight: activePage === 'music' ? 'bold' : 'normal' }}
                >
                    Página de Música
                </button>
                <button 
                    onClick={() => setActivePage('browser')}
                    style={{ fontWeight: activePage === 'browser' ? 'bold' : 'normal' }}
                >
                    Página del Navegador
                </button>
            </div>

            {activePage === 'music' ? <MusicPlayerPage /> : <BrowserHistoryPage />}
        </div>
    );
}
