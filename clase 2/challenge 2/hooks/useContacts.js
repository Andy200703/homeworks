//ANDY F. PAZ ROSERO 2244314

import { useState, useEffect } from 'react';

// Hook personalizado que encapsula la lógica de la agenda de contactos
export default function useContacts() {
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

    return {
        contacts,
        isLoading,
        handleAddContact,
        handleDeleteContact
    };
}
