import React from 'react';// Importing React core library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// Importing components required for routing from react-router-dom
import Home from './components/Home/Home';// Importing the Home component which will be displayed on the homepage
import './App.css';

function App() {
  return (
    // Wrapping the application with Router so routing works throughout the app
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
