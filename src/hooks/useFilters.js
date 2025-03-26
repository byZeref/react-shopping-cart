import {useEffect, useState} from "react";

export function useFilters({applyFilters}) {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const updatePriceFilter = (val) => {
    setFilters({
      category: filters.category,
      price: val,
    })
  }

  const updateCategoryFilter = (val) => {
    setFilters({
      category: val,
      price: filters.price,
    })
  }

  useEffect(() => {
    applyFilters(filters)
  }, [filters])

  return { filters, setFilters, updatePriceFilter, updateCategoryFilter }
}