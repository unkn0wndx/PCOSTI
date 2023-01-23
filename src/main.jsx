import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import 'animate.css';

import { App } from './App'
import './index.css'
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </BrowserRouter>
  // </React.StrictMode> 
)
