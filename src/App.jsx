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
    <main className="main-container">
      <Header loading={loading} quantity={filteredProducts.length} />
      {filteredProducts?.length > 0 && <Products products={filteredProducts} />}

      <CartButton toggle={toggleCart} />
      {showCart && <Cart />}
    </main>
  )
}

export default App
