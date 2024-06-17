import React from 'react'
import ReactDOM from 'react-dom/client'
import {router} from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import CartProvider from './contexts/CartContext.tsx' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
