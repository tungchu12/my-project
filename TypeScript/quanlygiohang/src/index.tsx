import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const hello = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
hello.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);