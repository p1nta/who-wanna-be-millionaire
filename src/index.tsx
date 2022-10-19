import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import App from './containers/app';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = ReactDOM.createRoot(rootNode);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}