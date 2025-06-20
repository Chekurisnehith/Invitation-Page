import React from 'react';// Importing core React libraries
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';// Importing the root App componen


const root = ReactDOM.createRoot(document.getElementById('root'));// Creating the root of the React app and binding it
root.render( //Rendering the App component inside <React.StrictMode> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



