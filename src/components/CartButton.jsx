import { CartIcon } from "@/components/icons/CartIcon.jsx";

export function CartButton({toggle}) {
  return (
    <button
      className="fixed bottom-4 left-4 rounded-full p-4 bg-blue-500 cursor-pointer z-50"
      onClick={toggle}
    >
      <CartIcon />
    </button>
  )
}