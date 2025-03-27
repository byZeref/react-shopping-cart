import { StrictMode } from 'react'
import '@/styles/main.css'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from "@/context/filters.jsx";
import { CartProvider } from "@/context/cart.jsx";
import App from '@/App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <FiltersProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FiltersProvider>
  // </StrictMode>,
)
