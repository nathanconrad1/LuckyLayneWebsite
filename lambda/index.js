import { callVertexAI } from './vertex.js';

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': 'https://luckylaynestudio.com', // or '*' for dev
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle the CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': 'https://luckylaynestudio.com',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: '',
    };
  }
  

  try {
    const body = JSON.parse(event.body);

    // Replace with your actual Vertex AI logic
    const result = {
      message: 'AI evaluation completed',
      input: body,
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};


