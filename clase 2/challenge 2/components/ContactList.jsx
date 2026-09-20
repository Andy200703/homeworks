//ANDY F. PAZ ROSERO 2244314

import React from 'react';

// --- Componente: Listado de Contactos ---
export default function ContactList({ contacts, onDeleteContact }) {
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
