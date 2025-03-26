import { useEffect, useState } from "react";
import { getProducts } from "@/services/products.js";

export const useProducts = () => {
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    const { data, status } = await getProducts()
    if (status === 200) {
      setProducts(data)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return { products, setProducts }
}