// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';



ReactDOM.render(
  <GoogleOAuthProvider clientId="693604534889-h4v2igvfa3u6s281ip6qp0827rjpidmg.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root')
);

