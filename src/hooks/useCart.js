import { useContext, useMemo, useState } from "react";
import { CartContext } from "@/context/cart.jsx";
import { CountUp } from "countup.js";
import { CART_ACTIONS } from '@/utils/constants.js'
const { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, CLEAN_CART } = CART_ACTIONS

export function useCart() {
  const {cart, dispatch} = useContext(CartContext)
  const [showCart, setShowCart] = useState(false)
  const items = useMemo(() => {
    return cart.reduce((acc, prod) => {
      acc += prod.quantity
      return acc
    }, 0)
  }, [cart])
  const total = useMemo(() => {
    return cart.reduce((acc, prod) => {
      acc += prod.price * prod.quantity
      return acc
    }, 0)
  }, [cart])

  const toggleCart = () => setShowCart(!showCart)

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT_TO_CART, payload: product })
  }
  const removeProductFromCart = (product) => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: product })
  }
  const cleanCart = () => {
    dispatch({ type: CLEAN_CART })
  }

  const runTotalAmountAnimation = () => {
    const options = {
      duration: 0.3,
      decimalPlaces: 2,
      prefix: '$ ',
    }
    const anim = new CountUp('total-amount', total, options)
    !anim.error ? anim.start() : console.log(anim.error)
  }

  return {
    cart, showCart, items, total,
    toggleCart, addProductToCart, removeProductFromCart, cleanCart, runTotalAmountAnimation,
  }
}