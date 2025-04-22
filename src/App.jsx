import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Add your routes or other components here */}
      </div>
    </Router>
  );
}

export default App;
