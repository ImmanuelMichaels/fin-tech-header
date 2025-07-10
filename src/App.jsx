import { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home'; 
// import About from './Components/Pages/About'; 
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
