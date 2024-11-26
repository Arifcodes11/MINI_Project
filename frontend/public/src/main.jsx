import React from 'react'
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppRoutes />
    </Router>
  </React.StrictMode>,
)
