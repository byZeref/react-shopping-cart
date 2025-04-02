import { createContext, useReducer, useState } from 'react'
import { initialState, cartReducer } from '@/reducers/cart.js'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}