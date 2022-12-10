import { initialize } from '@ui-blox/core';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'prismjs/themes/prism-okaidia.css'; //Example style, you can use another

initialize().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
});
