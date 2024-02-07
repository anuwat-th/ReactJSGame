import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationRoute from './src/routes/ApplicationRoute';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ApplicationRoute />
  </React.StrictMode>
);
