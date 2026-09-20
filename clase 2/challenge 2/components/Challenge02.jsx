//ANDY F. PAZ ROSERO 2244314

//CHALLENGE 02

import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import useContacts from '../hooks/useContacts';

// --- Componente Principal ---
export default function Challenge02() {
    const { contacts, isLoading, handleAddContact, handleDeleteContact } = useContacts();

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
