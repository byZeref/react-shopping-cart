import {Product} from "@/components/Product.jsx";

export function Products({ products }) {

  return (
    <ul className="products-list gap-[10px] lg:gap-[20px]">
      { products.map(prod => <Product key={prod.id} product={prod} />) }
    </ul>
  )
}