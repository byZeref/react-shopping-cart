export function Product({ product }) {

  return (
    <>
      <li className="product-card h-[150px] bg-[#383a3f]">
        <div className="w-full h-full flex">
          <img className="h-full w-[120px] min-w-[120px]" src={product.image} alt={product.title}/>
          <div className="flex flex-col py-2 px-4 w-full gap-1">
            <h4 className="font-semibold">{product.title}</h4>
            <p className="text-sm capitalize text-slate-300">{product.category}</p>
            <p className="font-medium text-xl mt-auto">$ {product.price.toFixed(2)}</p>
          </div>
        </div>
      </li>
    </>
  )
}