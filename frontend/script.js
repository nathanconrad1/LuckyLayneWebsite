const form = document.getElementById('eval-form');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const data = {
    website: document.getElementById('website').value,
    logo: document.getElementById('logo').value,
    media: document.getElementById('media').value,
    goals: document.getElementById('goals').value,
    vertexAccessToken: 'YOUR_ACCESS_TOKEN' // Ideally passed from a backend, securely
  };

  const res = await fetch('https://lwwgz7tzkd.execute-api.us-east-2.amazonaws.com/prod/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  result.innerText = json.suggestions;
});
