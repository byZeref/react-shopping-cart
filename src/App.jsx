import api from './api/axios.js'
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const { data, status } = await api.get('/products')
      .catch(e => {
        console.error('error getting products', e)
      })

    console.log('data', data, status)
    if (status === 200) {
      setProducts(data)
    }
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <main className="main-container">
      <h1 className="mt-4">Shopping Cart</h1>
      <div>
        <ul>
          {
            products.length && products.map(prod =>
              <li key={prod.id}>{prod.title}</li>
            )
          }
        </ul>
      </div>
    </main>
  )
}

export default App
