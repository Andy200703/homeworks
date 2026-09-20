//ANDY F. PAZ ROSERO 2244314

import React, { useState } from 'react';
import { playlist } from '../data/mockData';

// Página 1: Reproductor de Música (Linked List)
export default function MusicPlayerPage() {
    const [currentSong, setCurrentSong] = useState(playlist.head);

    const playNext = () => {
        if (currentSong && currentSong.next) {
            setCurrentSong(currentSong.next);
        }
    };

    return (
        <div style={{ border: '2px solid #333', padding: '20px', marginTop: '20px' }}>
            <h3>Reproductor de Canciones (Linked List)</h3>
            <p><strong>Sonando ahora:</strong> {currentSong ? currentSong.value : "Lista vacía"}</p>
            <button 
                onClick={playNext} 
                disabled={!currentSong || !currentSong.next}
                style={{ padding: '10px', fontSize: '16px' }}
            >
                Siguiente Canción ⏭️
            </button>
        </div>
    );
}
