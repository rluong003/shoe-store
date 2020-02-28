import React from 'react';
import './App.css';

import bImage from "./images/l&q.jpg";

import Homepage from "./pages/homepage/homepage.jsx"

function App() {
  return (
    <div >
    <Homepage />
    <img src={bImage} alt="l&q shoes" ></img>
    </div>
  );
}

export default App;
