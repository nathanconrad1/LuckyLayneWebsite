import axios from 'axios';

export async function callVertexAI(companyData) {
  const projectId = 'your-project-id';
  const region = 'us-central1';
  const model = 'text-bison';

  const url = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${model}:predict`;

  const prompt = `
You are a branding expert. Evaluate the following company's assets and suggest areas for improvement:

Company Website: ${companyData.website}
Logo Description: ${companyData.logo}
Photo/Video Style: ${companyData.media}
Goals: ${companyData.goals}

Respond with a professional evaluation.
  `;

  const response = await axios.post(
    url,
    { instances: [{ prompt }], parameters: { temperature: 0.7, maxOutputTokens: 500 } },
    {
      headers: {
        'Authorization': `Bearer ${companyData.vertexAccessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.predictions[0].content;
}
