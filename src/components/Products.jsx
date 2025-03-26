import {Product} from "@/components/Product.jsx";

export function Products({ products }) {

  return (
    <ul className="products-list">
      { products.map(prod => <Product key={prod.id} product={prod} />) }
    </ul>
  )
}