import React from 'react'
import ReactDOM from 'react-dom'
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // default theme
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
