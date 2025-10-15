# Customer Support Chatbot Portal

This project is a customer support chatbot portal that integrates NLP-based chatbots for handling FAQs, ticketing, and live agent escalation. The application is built using React and TypeScript.

## Features

- **NLP-based Chatbot**: Handles user queries and provides instant responses.
- **FAQ Section**: Displays frequently asked questions and their answers.
- **Ticketing System**: Allows users to create and manage support tickets.
- **Live Agent Escalation**: Facilitates escalation of queries to live agents.

## Project Structure

```
customer-support-chatbot-portal
├── src
│   ├── index.tsx               # Entry point of the application
│   ├── components               # Contains React components
│   │   ├── Chatbot.tsx         # Chatbot component
│   │   ├── FAQ.tsx             # FAQ component
│   │   ├── Ticketing.tsx       # Ticketing component
│   │   └── LiveAgentEscalation.tsx # Live agent escalation component
│   ├── services                 # Contains service functions
│   │   ├── nlpService.ts       # NLP service functions
│   │   ├── ticketService.ts     # Ticket management functions
│   │   └── agentService.ts      # Live agent management functions
│   ├── utils                    # Utility functions
│   │   └── helpers.ts          # Helper functions
│   ├── types                    # TypeScript types
│   │   └── index.ts            # Type definitions
│   └── styles                   # Stylesheets
│       └── main.css            # Main CSS file
├── public
│   └── index.html              # Main HTML file
├── package.json                 # NPM configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd customer-support-chatbot-portal
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## Usage

- Access the chatbot portal in your browser at `http://localhost:3000`.
- Interact with the chatbot to get answers to FAQs, create support tickets, or escalate to a live agent.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.