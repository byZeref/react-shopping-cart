import { CART_ACTIONS } from '@/utils/constants.js'
const { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, CLEAN_CART } = CART_ACTIONS

export const initialState = JSON.parse(localStorage.getItem('cart')) ?? []

export const cartReducer = (state, action) => {
  const { type, payload: product } = action
  const save = (item, name = 'cart') => localStorage.setItem(name, JSON.stringify(item))
  const remove = (name = 'cart') => localStorage.removeItem(name)

  switch (type) {
    case ADD_PRODUCT_TO_CART: {
      const exists = state.some(item => item.id === product.id)
      let newCart
      if (!exists) {
        newCart = [...state, {...product, quantity: 1}]
      } else {
        newCart = state.map(prod =>
          prod.id === product.id
            ? {...prod, quantity: prod.quantity + 1}
            : prod
        )
      }
      save(newCart)
      return newCart
    }
    case REMOVE_PRODUCT_FROM_CART: {
      if (!state.some(prod => prod.id === product.id)) return;
      let newCart
      if (product.quantity === 1) {
        newCart = state.filter(prod => prod.id !== product.id)
      } else {
        newCart = state.map(prod => prod.id === product.id
          ? {...prod, quantity: prod.quantity - 1}
          : prod
        )
      }
      save(newCart)
      return newCart
    }
    case CLEAN_CART: {
      remove()
      return []
    }
  }
}