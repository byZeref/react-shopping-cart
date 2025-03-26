import { Products } from "@/components/Products.jsx";
import { useProducts } from "@/hooks/useProducts.js";

function App() {
  const { products, setProducts } = useProducts()
  const title = products.length
    ? <h1>Products</h1>
    : <h2 className="text-center text-2xl">Loading...</h2>

  return (
    <main className="main-container">
      <div className="flex justify-between items-center mb-2">
        {title}
        {/*{*/}
        {/*  products.length > 0 &&*/}
        {/*  <select name="" id="">*/}
        {/*    <option value="all">Categoria</option>*/}
        {/*  </select>*/}
        {/*}*/}

      </div>
      {products?.length > 0 && <Products products={products}/>}
    </main>
  )
}

export default App
