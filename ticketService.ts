import axios from 'axios';
import { Ticket } from '../types';

const API_URL = 'https://api.example.com/tickets';

export const createTicket = async (ticketData: Ticket): Promise<Ticket> => {
    const response = await axios.post(API_URL, ticketData);
    return response.data;
};

export const fetchTickets = async (): Promise<Ticket[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const updateTicket = async (ticketId: string, ticketData: Partial<Ticket>): Promise<Ticket> => {
    const response = await axios.put(`${API_URL}/${ticketId}`, ticketData);
    return response.data;
};