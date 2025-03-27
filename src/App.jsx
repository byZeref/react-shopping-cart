import { Header } from "@/components/Header.jsx";
import { Products } from "@/components/Products.jsx";
import { useProducts } from "@/hooks/useProducts.js";

function App() {
  const { loading, filteredProducts } = useProducts()

  return (
    <main className="main-container">
      <Header loading={loading} quantity={filteredProducts.length} />
      {filteredProducts?.length > 0 && <Products products={filteredProducts} />}
    </main>
  )
}

export default App
