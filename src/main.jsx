import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import './index.css';
import { CartProvider } from './context/CartContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HashRouter >
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </StrictMode>,
)
