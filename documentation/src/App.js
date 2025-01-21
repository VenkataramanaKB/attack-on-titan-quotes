import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await axios.get('http://localhost:3001/quote'); // Local API URL
      setQuote(response.data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="App">
      <h1>Attack on Titan Quotes API Documentation</h1>
      <p>This API provides random quotes from the anime *Attack on Titan*.</p>

      <h2>API Endpoints</h2>
      <h3>GET /quote</h3>
      <p>This endpoint returns a random quote from *Attack on Titan*. Here’s an example response:</p>
      <pre>
        {`{
  "author": "Armin Arlert",
  "quote": "I Don't Like The Terms 'Good Person' or 'Bad Person.' It Is Impossible To Be Entirely Good To Everyone. To Some, You Are A Good Person, While To Others, You Are A Bad Person."
}`}
      </pre>
      <p>Usage: <code>GET http://localhost:3001/quote</code></p>

      <h2>Try It Out</h2>
      <button onClick={fetchQuote}>Get Random Quote</button>

      {quote && (
        <div>
          <h3>Random Quote</h3>
          <p><strong>{quote.author}</strong>: {quote.quote}</p>
        </div>
      )}

      <h2>How to Set Up Locally</h2>
      <ol>
        <li>Clone the repository</li>
        <li>Run <code>npm install</code> in both the server and documentation folder</li>
        <li>Run <code>npm start</code> in both folders</li>
        <li>Visit <code>http://localhost:3000</code> for the React documentation</li>
        <li>Visit <code>http://localhost:3001/quote</code> for the API</li>
      </ol>
    </div>
  );
}

export default App;
