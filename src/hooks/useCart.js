import { useContext } from "react";
import { CartContext } from "@/context/cart.jsx";

export function useCart() {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const addProductToCart = (product) => {
    const copy = structuredClone(cart)
    const target = copy.find(prod => prod.id === product.id)
    if (target) {
      target.quantity++
      setCart(copy)
    } else {
      setCart(prev => [
        ...prev,
        {...product, quantity: 1}
      ])
    }
  }

  return { cart, setCart, showCart, toggleCart, addProductToCart }
}