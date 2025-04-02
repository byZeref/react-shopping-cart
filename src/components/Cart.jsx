import { CartIcon } from "@/components/icons/CartIcon.jsx";
import { useCart } from "@/hooks/useCart.js";
import { useEffect } from "react";

export function Cart({ visible }) {
  const { cart, total, addProductToCart, removeProductFromCart, cleanCart, runTotalAmountAnimation } = useCart()

  useEffect(() => {
    runTotalAmountAnimation()
  }, [total])

  return (
    <div className={`fixed top-0 bottom-0 left-0 w-[300px] lg:w-[400px] bg-gray-300 dark:bg-[#161414] p-5 duration-300 ${visible ? 'translate-x-0' : 'translate-x-[-400px]'}`}>
      <div className="flex items-end gap-1 mb-6">
        <CartIcon width="28" stroke="2" />
        <h4 className="text-2xl font-semibold">My Cart</h4>
      </div>

      <ul className="cart-list flex flex-col gap-4 max-h-[65vh] overflow-y-auto">
        {cart.map(prod =>
          <li className="cart-item flex gap-2" key={prod.id}>
            <img className="min-w-[60px] w-[60px] h-[60px]" src={prod.image} alt=""/>
            <div className="flex flex-col">
              <p className="text-sm line-clamp-2 leading-[1.1]">{prod.title}</p>
              <p className=" font-semibold mt-auto">$ {prod.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col items-end ml-auto min-w-[80px]">
              <p className="text-xs">Subtotal:</p>
              <p className="text-sm font-semibold">$ {(prod.price * prod.quantity).toFixed(2)}</p>
              <div className="flex items-center gap-1">
                <button onClick={() => removeProductFromCart(prod)} className="bg-red-500 dark:bg-red-900 w-[24px] h-[24px] rounded-xs text-sm cursor-pointer">-</button>
                <span className="text-md">{prod.quantity}</span>
                <button onClick={() => addProductToCart(prod)} className="bg-blue-500 dark:bg-blue-900 w-[24px] h-[24px] rounded-xs text-sm cursor-pointer">+</button>
              </div>
            </div>
          </li>
        )}
      </ul>
      {cart.length > 0 &&
        <div className="mt-6">
          <p className="text-sm">Total amount:</p>
          <p id="total-amount" className={"text-2xl font-bold"}>$ {total.toFixed(2)}</p>
          <button onClick={cleanCart} className="w-full h-[40px] bg-red-500 dark:bg-red-800 mt-2 rounded-md cursor-pointer">Remove all</button>
        </div>
      }
      {cart.length === 0 &&
        <div className="text-sky-800 dark:text-sky-500">
          <h6 className="font-semibold text-lg">Your cart is empty!</h6>
          <p className="text-sm">Add a product and you'll be able to watch it here.</p>
        </div>
      }

    </div>
  )
}