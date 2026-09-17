//ANDY F. PAZ ROSERO 2244314

import React, { useState, useEffect } from 'react';

//CHALLENGE 02

// --- Componente: Agregar Contacto ---
function ContactForm({ onAddContact }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        if (name && phone) {
            onAddContact({
                id: Date.now(), // ID único simple
                name: name,
                phone: phone
            });
            setName('');
            setPhone('');
        }
    };

    return (
        <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <h3>Agregar Nuevo Contacto</h3>
            <input 
                type="text" 
                placeholder="Nombre" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                style={{ marginRight: '10px' }}
            />
            <input 
                type="text" 
                placeholder="Teléfono" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                style={{ marginRight: '10px' }}
            />
            <button onClick={handleSubmit}>Guardar</button>
        </div>
    );
}

// --- Componente: Listado de Contactos ---
function ContactList({ contacts, onDeleteContact }) {
    if (contacts.length === 0) {
        return <p>No hay contactos disponibles.</p>;
    }

    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id} style={{ margin: '10px 0' }}>
                    <strong>{contact.name}</strong> - {contact.phone}
                    <button 
                        onClick={() => onDeleteContact(contact.id)} 
                        style={{ marginLeft: '15px', color: 'red' }}
                    >
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>
    );
}

// --- Componente Principal ---
export default function Challenge02() {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Simulación de carga de datos inicial usando useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setContacts([
                { id: 1, name: 'Jonathan López', phone: '315-926-5443' },
                { id: 2, name: 'Estudiante Ejemplo', phone: '123-456-7890' }
            ]);
            setIsLoading(false);
        }, 2000); // Loader de 2 segundos simulando fetch

        // Cleanup function (buenas prácticas vistas en clase)
        return () => clearInterval(timer);
    }, []);

    const handleAddContact = (newContact) => {
        setContacts((prev) => [...prev, newContact]);
    };

    const handleDeleteContact = (id) => {
        setContacts((prev) => prev.filter(contact => contact.id !== id));
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h2>Challenge 02 - Agenda de Contactos</h2>
            
            {isLoading ? (
                <h3>Cargando contactos (Loader en progreso)...</h3>
            ) : (
                <>
                    <ContactForm onAddContact={handleAddContact} />
                    <ContactList 
                        contacts={contacts} 
                        onDeleteContact={handleDeleteContact} 
                    />
                </>
            )}
        </div>
    );
}
