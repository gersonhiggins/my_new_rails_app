// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Make an HTTP request to fetch the random greeting
    fetch("/random_greeting")
      .then(response => response.json())
      .then(data => setMessage(data.greeting))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>
      <p>{message}</p>
    </div>
  );

}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
