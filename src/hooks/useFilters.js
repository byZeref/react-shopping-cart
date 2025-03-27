import { useContext } from "react";
import { FiltersContext } from "@/context/filters.jsx";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

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

  return { filters, updatePriceFilter, updateCategoryFilter }
}