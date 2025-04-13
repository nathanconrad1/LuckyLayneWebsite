import { callVertexAI } from './vertex.js';

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const result = await callVertexAI(body);

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ suggestions: result }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong.' }),
    };
  }
};
