import { StrictMode } from 'react'
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

  root.render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>,
   </BrowserRouter>,
)
