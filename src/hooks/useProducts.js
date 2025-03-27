import { useEffect, useState } from "react";
import { getProducts } from "@/services/products.js";
import { useFilters } from "@/hooks/useFilters.js";

export const useProducts = () => {
  const { filters } = useFilters()
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const loadProducts = async () => {
    setLoading(true)
    const { data, status } = await getProducts()
      .finally(() => { setLoading(false) })
    if (status === 200) {
      setProducts(data)
      setFilteredProducts(data)
    }
  }

  const filterProducts = () => {
    const results = products.filter(prod =>
      (filters.category === 'all' || filters.category === prod.category) && prod.price > filters.price)
    setFilteredProducts(results)
  }

  useEffect(() => {
    if (products.length === 0) loadProducts()
    else filterProducts()
  }, [filters])

  return { loading, filteredProducts, filterProducts }
}