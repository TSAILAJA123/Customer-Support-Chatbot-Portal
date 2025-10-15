import axios from 'axios';

const NLP_API_URL = 'https://api.example.com/nlp'; // Replace with your NLP service URL

export const processUserQuery = async (query: string): Promise<string> => {
    try {
        const response = await axios.post(NLP_API_URL, { query });
        return response.data.response; // Adjust based on your API response structure
    } catch (error) {
        console.error('Error processing user query:', error);
        throw new Error('Unable to process query at this time.');
    }
};

export const getFAQs = async (): Promise<Array<{ question: string; answer: string }>> => {
    try {
        const response = await axios.get(`${NLP_API_URL}/faqs`);
        return response.data.faqs; // Adjust based on your API response structure
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        throw new Error('Unable to fetch FAQs at this time.');
    }
};