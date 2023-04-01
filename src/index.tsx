import React from 'react';

import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import Routing from './routing';

const rootNode = document.getElementById('root');

if (rootNode) {
  const root = ReactDOM.createRoot(rootNode);
  root.render(
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  );
}