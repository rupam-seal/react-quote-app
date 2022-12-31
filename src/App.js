import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
  const a = 'click button to view advice';
  const [advice, setAdvice] = useState(a);

  const fetchAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <h1>{advice}</h1>
        <button onClick={fetchAdvice}>Change</button>
      </div>
    </div>
  );
};

export default App;
