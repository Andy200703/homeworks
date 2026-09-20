//ANDY F. PAZ ROSERO 2244314

import { LinkedList } from '../dataStructures/LinkedList';
import { DoublyLinkedList } from '../dataStructures/DoublyLinkedList';

// ==========================================
// POBLADO DE DATOS FALSOS (Mocked Data)
// ==========================================

// Llenado de canciones
export const playlist = new LinkedList();
playlist.append("1. Bohemian Rhapsody - Queen");
playlist.append("2. Hotel California - The Eagles");
playlist.append("3. Shape of You - Ed Sheeran");
playlist.append("4. Blinding Lights - The Weeknd");

// Llenado de historial de navegador
export const browserHistory = new DoublyLinkedList();
browserHistory.append("www.google.com");
browserHistory.append("www.reactjs.org");
browserHistory.append("www.github.com/JonathanLopez");
browserHistory.append("www.stackoverflow.com");
