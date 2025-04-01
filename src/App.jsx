import { Products } from "@/components/Products.jsx";
import { Header } from "@/components/Header.jsx";
import { CartButton } from "@/components/CartButton.jsx";
import { Cart } from "@/components/Cart.jsx";
import { useProducts } from "@/hooks/useProducts.js";
import { useCart } from "@/hooks/useCart.js";

function App() {
  const { loading, filteredProducts } = useProducts()
  const { showCart, toggleCart } = useCart()

  return (
    <main className="main-container px-[20px] py-[10px] duration-300 lg:px-[40px] lg:py-[20px]">
      <Header loading={loading} quantity={filteredProducts.length} />
      {filteredProducts?.length > 0 && <Products products={filteredProducts} />}

      <CartButton toggle={toggleCart} />
      <Cart visible={showCart} />
    </main>
  )
}

export default App
