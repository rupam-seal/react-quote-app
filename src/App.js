import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
const App = () => {
  const a = 'click below to get an advice';
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
        <h2>{advice}</h2>
        <button onClick={fetchAdvice}>GIVE ME ADVICE</button>
      </div>
    </div>
  );
};

export default App;
