import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function ConfirmSignUp() {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [confirmed, setConfirmed] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await Auth.confirmSignUp(email, code);
            setConfirmed(true);
            // Redirigez l'utilisateur ou affichez un message de succès
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="...">
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="text" onChange={(e) => setCode(e.target.value)} placeholder="Code de confirmation" required />
                <button type="submit">Confirmer l'inscription</button>
            </form>
            {error && <p>{error}</p>}
            {confirmed && <p>Inscription confirmée !</p>}
        </section>
    );
}

export default ConfirmSignUp;
