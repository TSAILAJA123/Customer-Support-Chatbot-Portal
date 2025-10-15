import React from 'react';

const LiveAgentEscalation: React.FC = () => {
    const handleEscalate = () => {
        // Logic to initiate chat with a live agent
        console.log("Escalating to live agent...");
    };

    return (
        <div className="live-agent-escalation">
            <h2>Need More Help?</h2>
            <p>If your query requires immediate assistance, please escalate to a live agent.</p>
            <button onClick={handleEscalate}>Chat with a Live Agent</button>
        </div>
    );
};

export default LiveAgentEscalation;