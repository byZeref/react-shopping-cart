import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(true)

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
      { children }
    </CartContext.Provider>
  )
}