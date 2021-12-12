import axios from "axios";
import { useState } from 'react'

import './App.css'

function App() {
  const [state, setState] = useState({
    advice: '...'
  })
  const onClick = (e) => {
    e.preventDefault();
    axios.get("https://api.adviceslip.com/advice").then((res) => {
        setState({
        ...state,
        advice: res.data.slip.advice
      })
  })
  }
  return (
    <div className="App">
      <header className="header">
        advicePlace
      </header>
      <div className="advice-section">
      <h1>Random Advice Generator</h1>
      <br />
      <div className="advice">

      <h2>"{state.advice}"</h2>
      </div>
      <button onClick={onClick}>Click For Advice</button>
      </div>
    </div>
  );
}

export default App;