import { CartIcon } from "@/components/icons/CartIcon.jsx";
import {useEffect} from "react";

export function CartButton({toggle, quantity}) {

  useEffect(() => {
    const el = document.querySelector('.cart-counter')
    if (el) {
      if (!el.classList.contains('run')) {
        el.classList.add('run')
        setTimeout(() => {
          el.classList.remove('run')
        }, 150)
      }
    }
  }, [quantity]);

  return (
    <button
      className="cart-button fixed bottom-4 left-4 rounded-full p-4 bg-blue-500 text-white cursor-pointer z-100"
      onClick={toggle}
    >
      <CartIcon />
      {quantity > 0 &&
        <span className="cart-counter absolute bg-red-600 top-0 right-0 rounded-full h-[20px] w-[20px] flex items-center justify-center text-xs font-semibold">
          {quantity}
        </span>
      }
    </button>
  )
}