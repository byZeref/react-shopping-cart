import {useContext, useMemo} from "react";
import { CartContext } from "@/context/cart.jsx";

export function useCart() {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext)
  const total = useMemo(() => {
    let acc = 0
    cart.forEach(prod => {
      acc += prod.price * prod.quantity
    })
    return acc
  }, [cart])

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const addProductToCart = (product) => {
    // via array.map
    const exists = cart.some(item => item.id === product.id)
    if (!exists) { // <--- agregar el producto (no esta en el carrito aun)
      setCart([...cart, {...product, quantity: 1}])
    } else { // <--- aumentar la cantidad del producto (ya esta en el carrito)
      setCart(cart.map(prod => // <--- usar (prev) para prevenir errores de 'race condition'
        prod.id === product.id
          ? {...prod, quantity: prod.quantity + 1}
          : prod
      ))
    }

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

    if (product.quantity === 1) { // <--- eliminar el producto
      setCart(cart.filter(prod => prod.id !== product.id))
    } else { // <--- disminuir la cantidad del producto
      setCart(cart.map(prod => prod.id === product.id
        ? {...prod, quantity: prod.quantity - 1}
        : prod
      ))
    }
  }

  const cleanCart = () => {
    console.log('clean cart')
    setCart([])
  }

  return { cart, setCart, showCart, total, toggleCart, addProductToCart, removeProductFromCart, cleanCart }
}