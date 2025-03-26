import { Filters } from "@/components/Filters.jsx";

export function Header({loading, products, applyFilters}) {
  const title = loading ? <h2 className="text-center text-2xl">Loading...</h2> :
    products.length ? <h1>Products</h1> : <h1 className="text-center text-2xl">Sin resultados</h1>

  return (
    <div className="flex justify-between items-center mb-2">
      {title}
      {!loading && <Filters applyFilters={applyFilters}/>}
    </div>
  )
}