//ANDY F. PAZ ROSERO 2244314

// --- Doubly Linked List (Para Historial de Navegador) ---
export class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // Enlace adicional (anterior)
    }
}

export class DoublyLinkedList {
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
