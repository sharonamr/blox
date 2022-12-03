import { initialize } from '@ui-blox/core';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

initialize().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
});
