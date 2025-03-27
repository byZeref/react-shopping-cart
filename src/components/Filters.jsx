import { useFilters } from "@/hooks/useFilters.js";
import { CATEGORIES as categories } from '@/utils/constants.js'

export function Filters() {
  const { filters, updatePriceFilter, updateCategoryFilter } = useFilters()

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <label htmlFor="price-filter">Min price: ({filters.price})</label>
        <input
          id="price-filter" type="range"
          min={0} max={1000} step={10}
          value={filters.price}
          onChange={(e) => updatePriceFilter(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="categories-filter">Category:</label>
        <select
          id="categories-filter w-full"
          style={{width: '150px', height: '35px'}}
          onChange={(e) => updateCategoryFilter(e.target.value)}
        >
          {categories.map(({label, value}) =>
            <option key={value} className="text-black" value={value}>{label}</option>)}
        </select>
      </div>
    </div>
  )
}