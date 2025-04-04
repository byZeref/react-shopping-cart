import { CartAddIcon } from "@/components/icons/CartAddIcon.jsx";
import { useCart } from "@/hooks/useCart.js";

export function Product({ product }) {
  const { addProductToCart } = useCart()

  const handleClick = () => {
    addProductToCart(product)
  }

  return (
    <li className="product-card h-[150px] bg-white dark:bg-[#383a3f] rounded-sm">
      <div className="w-full h-full flex">
        <div className="h-full w-[120px] min-w-[120px] rounded-sm overflow-hidden">
          <img className="h-full w-full" src={product.image} alt={product.title}/>
        </div>
        <div className="flex flex-col py-2 px-4 w-full gap-1 relative">
          <h4 className="font-semibold line-clamp-2">{product.title}</h4>
          <p className="text-sm capitalize text-slate-700 dark:text-slate-300">{product.category}</p>
          <p className="font-medium text-2xl mt-auto">$ {product.price.toFixed(2)}</p>
          <button
            className="absolute bottom-3 right-3 border rounded-full p-[6px] cursor-pointer duration-200"
            onClick={handleClick}
          >
            <CartAddIcon />
          </button>
        </div>
      </div>
    </li>
  )
}