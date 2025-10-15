import React, { useState, useEffect } from 'react';
import { fetchResponse } from '../services/nlpService';
import { Ticketing } from './Ticketing';
import { LiveAgentEscalation } from './LiveAgentEscalation';

const Chatbot: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState<{ user: string; bot: string }[]>([]);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!userInput) return;

        setChatHistory([...chatHistory, { user: userInput, bot: '' }]);
        setLoading(true);
        const response = await fetchResponse(userInput);
        setChatHistory((prev) => [...prev, { user: userInput, bot: response }]);
        setUserInput('');
        setLoading(false);
    };

    return (
        <div className="chatbot">
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index}>
                        <strong>User:</strong> {chat.user}
                        <br />
                        <strong>Bot:</strong> {chat.bot}
                    </div>
                ))}
                {loading && <div>Loading...</div>}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
            <Ticketing />
            <LiveAgentEscalation />
        </div>
    );
};

export default Chatbot;