import {useContext, useMemo} from "react";
import { CartContext } from "@/context/cart.jsx";
import {useStorage} from "@/hooks/useStorage.js";

export function useCart() {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext)
  const total = useMemo(() => {
    let acc = 0
    cart.forEach(prod => {
      acc += prod.price * prod.quantity
    })
    return acc
  }, [cart])
  const { save, remove } = useStorage()

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const addProductToCart = (product) => {
    // via array.map
    const exists = cart.some(item => item.id === product.id)
    let newCart
    if (!exists) {
      newCart = [...cart, {...product, quantity: 1}]
    } else {
      newCart = cart.map(prod =>
        prod.id === product.id
          ? {...prod, quantity: prod.quantity + 1}
          : prod
      )
    }
    setCart(newCart)
    save(newCart)

    // via structuredClone
    // const copy = structuredClone(cart)
    // const target = copy.find(prod => prod.id === product.id)
    // if (target) {
    //   target.quantity++
    //   setCart(copy)
    // } else {
    //   setCart(prev => [
    //     ...prev,
    //     {...product, quantity: 1}
    //   ])
    // }

  }

  const removeProductFromCart = (product) => {
    if (!cart.some(prod => prod.id === product.id)) return; // <--- no existe el producto en el carrito
    let newCart
    if (product.quantity === 1) {
      newCart = cart.filter(prod => prod.id !== product.id)
    } else {
      newCart = cart.map(prod => prod.id === product.id
        ? {...prod, quantity: prod.quantity - 1}
        : prod
      )
    }
    setCart(newCart)
    save(newCart)
  }

  const cleanCart = () => {
    setCart([])
    remove()
  }

  return { cart, setCart, showCart, total, toggleCart, addProductToCart, removeProductFromCart, cleanCart }
}