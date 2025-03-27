import { CartIcon } from "@/components/icons/CartIcon.jsx";
import { useCart } from "@/hooks/useCart.js";

export function Cart() {
  const { cart } = useCart()

  return (
    <div className="fixed top-0 bottom-0 left-0 w-[400px] bg-[#161414] p-5">
      <div className="flex items-end gap-1 mb-4">
        <CartIcon width="28" stroke="2" />
        <h4 className="text-2xl font-semibold">My Cart</h4>
      </div>

      <ul className="cart-list flex flex-col gap-2">
        {cart.map(prod =>
          <li className="cart-item" key={prod.id}>{prod.title} - {prod.quantity}</li>
        )}
      </ul>
    </div>
  )
}