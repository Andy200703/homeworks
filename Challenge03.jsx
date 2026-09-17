//ANDY F. PAZ ROSERO 2244314

import React, { useState } from 'react';

//CHALLENGE 03

// --- 1. Singly Linked List (Para Canciones) ---
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
}

// --- 2. Doubly Linked List (Para Historial de Navegador) ---
class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // Enlace adicional (anterior)
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    append(value) {
        const newNode = new DNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail; // Referencia al anterior
            this.tail = newNode;
        }
        this.length++;
    }
}

// ==========================================
// POBLADO DE DATOS FALSOS (Mocked Data)
// ==========================================

// Llenado de canciones
const playlist = new LinkedList();
playlist.append("1. Bohemian Rhapsody - Queen");
playlist.append("2. Hotel California - The Eagles");
playlist.append("3. Shape of You - Ed Sheeran");
playlist.append("4. Blinding Lights - The Weeknd");

// Llenado de historial de navegador
const browserHistory = new DoublyLinkedList();
browserHistory.append("www.google.com");
browserHistory.append("www.reactjs.org");
browserHistory.append("www.github.com/JonathanLopez");
browserHistory.append("www.stackoverflow.com");

// ==========================================
// COMPONENTES DE REACT (Páginas)
// ==========================================

// Página 1: Reproductor de Música (Linked List)
function MusicPlayerPage() {
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

// Página 2: Historial del Navegador (Doubly Linked List)
function BrowserHistoryPage() {
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
