import { Product } from './product'

type ProductProps = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export async function Catalog() {
  const URL = `${process.env.NEXT_API_BASE_URL}/products`
  const request = await fetch(URL).then((response) => response.json())

  const { products, limit, total } = request

  return (
    <div className="p-6">
      <h2 className="py-6 text-2xl font-bold tracking-tight">Catálogo</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product: ProductProps) => {
          return <Product key={product.id} content={product} />
        })}
      </div>

      <div className="p-6 text-right">
        <p>
          Exibindo {limit} de {total} itens
        </p>
      </div>
    </div>
  )
}
