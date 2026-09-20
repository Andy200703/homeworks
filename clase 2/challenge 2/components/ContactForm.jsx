//ANDY F. PAZ ROSERO 2244314

import React, { useState } from 'react';

// --- Componente: Agregar Contacto ---
export default function ContactForm({ onAddContact }) {
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
