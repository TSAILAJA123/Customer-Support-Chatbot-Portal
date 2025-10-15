import React, { useState, useEffect } from 'react';
import { createTicket, fetchTickets } from '../services/ticketService';

const Ticketing: React.FC = () => {
    const [tickets, setTickets] = useState([]);
    const [ticketDescription, setTicketDescription] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTickets = async () => {
            const fetchedTickets = await fetchTickets();
            setTickets(fetchedTickets);
            setLoading(false);
        };
        loadTickets();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (ticketDescription) {
            await createTicket(ticketDescription);
            setTicketDescription('');
            const updatedTickets = await fetchTickets();
            setTickets(updatedTickets);
        }
    };

    return (
        <div className="ticketing">
            <h2>Support Ticketing</h2>
            {loading ? (
                <p>Loading tickets...</p>
            ) : (
                <ul>
                    {tickets.map(ticket => (
                        <li key={ticket.id}>{ticket.description}</li>
                    ))}
                </ul>
            )}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ticketDescription}
                    onChange={(e) => setTicketDescription(e.target.value)}
                    placeholder="Describe your issue"
                    required
                />
                <button type="submit">Create Ticket</button>
            </form>
        </div>
    );
};

export default Ticketing;