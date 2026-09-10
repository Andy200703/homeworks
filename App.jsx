//ANDY F. PAZ ROSERO 2244314

import React, { useState, useEffect } from 'react';

// 1. Nodo y Lista Enlazada Simple (Para pacientes en espera)
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

  // Método para eliminar un nodo y unir el anterior con el siguiente
  remove(value) {
    if (!this.head) return null;
    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
      if (!current.next) this.tail = current;
      this.length--;
    }
  }

  // Función auxiliar para renderizar datos en React usando map
  toArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// 2. Nodo Doble y Lista Doblemente Enlazada (Para historial de atención)
class DoubleNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null; 
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  append(value) {
    const newNode = new DoubleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  toArray() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// 3. Lista Circular (Para rotación automática de médicos)
// El último nodo apunta al inicio (head)
class CircularLinkedList {
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
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head; 
    }
    this.length++;
  }

  toArray() {
    let result = [];
    if (!this.head) return result;
    let current = this.head;
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);
    return result;
  }
}

// 4. Lista Circular Doblemente Enlazada (Para comité administrativo)
class DoublyCircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new DoubleNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
      newNode.prev = this.tail;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    this.length++;
  }

  toArray() {
    let result = [];
    if (!this.head) return result;
    let current = this.head;
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);
    return result;
  }
}

// ==========================================
// INSTANCIAS GLOBALES (Simulación de BD)
// ==========================================
const pacientesEnEspera = new LinkedList();
const historialAtencion = new DoublyLinkedList();
const medicosRotacion = new CircularLinkedList();
const comiteAdmin = new DoublyCircularLinkedList();

// Llenamos datos iniciales falsos sugeridos como buena práctica
medicosRotacion.append("Dr. House");
medicosRotacion.append("Dra. Grey");
medicosRotacion.append("Dr. Shepherd");

comiteAdmin.append("Director General");
comiteAdmin.append("Jefe de Finanzas");
comiteAdmin.append("Coordinador Médico");



function App() {
  // Manejo de estados (states) en la aplicación
  const [updateTracker, setUpdateTracker] = useState(0); 
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [medicoActual, setMedicoActual] = useState(medicosRotacion.head);

  // Hook useEffect para ejecutar código según el ciclo de vida
  useEffect(() => {
    // Simular que cada 10 segundos cambia el médico de guardia automáticamente
    const timer = setInterval(() => {
      setMedicoActual(prevMedico => prevMedico ? prevMedico.next : null);
    }, 10000);

    // Función de limpieza para limpiar el intervalo al desmontar
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Función ejecutada por evento onClick
  const agregarPaciente = () => {
    if (nombrePaciente.trim() !== "") {
      pacientesEnEspera.append(nombrePaciente);
      setNombrePaciente("");
      setUpdateTracker(prev => prev + 1); // Forzar renderizado
    }
  };

  // Función ejecutada por evento onClick
  const atenderPaciente = () => {
    if (pacientesEnEspera.head) {
      const pacienteAtendido = pacientesEnEspera.head.value;
      
      // Cuando se atiende un paciente:
      // 1. Se elimina de lista simple
      pacientesEnEspera.remove(pacienteAtendido); 
      
      // 2. Se agrega al historial (lista doblemente enlazada)
      historialAtencion.append(pacienteAtendido); 
      
      setUpdateTracker(prev => prev + 1); // Forzar renderizado
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Panel de Gestión - Clínica</h1>

      <section style={{ border: '1px solid black', padding: '10px', marginBottom: '15px' }}>
        <h2>Rotación de Médicos de Guardia (Lista Circular)</h2>
        <p><strong>Médico Actual (Cambia cada 10s):</strong> {medicoActual ? medicoActual.value : "Cargando..."}</p>
      </section>

      <section style={{ border: '1px solid blue', padding: '10px', marginBottom: '15px' }}>
        <h2>Gestión de Pacientes en Espera (Lista Enlazada Simple)</h2>
        <input 
          type="text" 
          value={nombrePaciente} 
          placeholder="Nombre del paciente"
          onChange={(e) => setNombrePaciente(e.target.value)} // Evento onChange para capturar inputs[cite: 5]
        />
        <button onClick={agregarPaciente} style={{ marginLeft: '10px' }}>Ingresar Paciente</button>
        <button onClick={atenderPaciente} style={{ marginLeft: '10px' }}>Atender Siguiente</button>
        <ul>
          {/* Se usa map para imprimir arreglos en el HTML[cite: 5] */}
          {pacientesEnEspera.toArray().map((paciente, index) => (
            <li key={index}>{paciente}</li>
          ))}
        </ul>
      </section>

      <section style={{ border: '1px solid green', padding: '10px', marginBottom: '15px' }}>
        <h2>Historial de Atención (Lista Doblemente Enlazada)</h2>
        <ul>
          {historialAtencion.toArray().map((paciente, index) => (
            <li key={index}>{paciente}</li>
          ))}
        </ul>
      </section>

      <section style={{ border: '1px solid purple', padding: '10px', marginBottom: '15px' }}>
        <h2>Comité Administrativo (Lista Circular Doblemente Enlazada)</h2>
        <ul>
          {comiteAdmin.toArray().map((miembro, index) => (
            <li key={index}>{miembro}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;