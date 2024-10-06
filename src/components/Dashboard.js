import React from 'react';

const aiServices = [
  { name: 'Text Generation', api: 'OpenAI GPT-3' },
  { name: 'Text-to-Speech', api: 'Google Cloud TTS' },
  { name: 'Music Generation', api: 'Beepbox API' },
  { name: 'Personalization', api: 'TensorFlow.js' },
  { name: 'User Interaction', api: 'Dialogflow' },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Relaxation App AI Services</h1>
      <ul>
        {aiServices.map((service, index) => (
          <li key={index}>
            <strong>{service.name}:</strong> {service.api}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard; 
