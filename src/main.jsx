import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Mantén esto por ahora si tienes estilos globales aquí

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
