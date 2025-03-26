import { Products } from "@/components/Products.jsx";
import { useProducts } from "@/hooks/useProducts.js";
import {Header} from "@/components/Header.jsx";

function App() {
  const { loading, filteredProducts, filterProducts } = useProducts()

  return (
    <main className="main-container">
      <Header loading={loading} products={filteredProducts} applyFilters={filterProducts} />
      {filteredProducts?.length > 0 && <Products products={filteredProducts}/>}
    </main>
  )
}

export default App
