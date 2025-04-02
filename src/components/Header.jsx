import { Filters } from "@/components/Filters.jsx";

export function Header({loading, quantity}) {
  const title = quantity
    ? <h1>Products</h1>
    : <h1 className="text-center text-2xl">Sin resultados</h1>

  return (
    <div className="flex flex-wrap gap-2 justify-between items-center mb-2">
      {title}
      {!loading && <Filters />}
    </div>
  )
}