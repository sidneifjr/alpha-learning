import { Package, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

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
          const productPrice = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(product.price)

          const priceAfterDiscount =
            product.price - product.price * (product.discountPercentage / 100)

          return (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="h-full"
            >
              <Card className="flex h-full flex-col">
                <CardHeader className="flex border-b pb-4">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={300}
                    quality={100}
                    className="h-52 object-cover object-top"
                  />

                  <div className="flex pt-2">
                    <CardTitle className="flex flex-col tracking-tight">
                      <span className="tracking-tight">
                        {product.title}, {product.brand}
                      </span>

                      <span className="!mt-1 flex items-center gap-1 text-sm">
                        <Star height={16} width={16} />
                        {product.rating}
                      </span>
                    </CardTitle>

                    <div className="relative flex flex-1 flex-col items-end">
                      <span className="tracking-tight text-gray-500 line-through">
                        {productPrice}
                      </span>

                      <span className="tracking-tight text-green-400">
                        {new Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(priceAfterDiscount)}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 py-6">
                  <CardDescription>{product.description}</CardDescription>
                </CardContent>

                <CardFooter className="flex items-center justify-between border-t py-4">
                  <Badge>{product.category}</Badge>

                  <span className="flex gap-2">
                    <Package /> {product.stock}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          )
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
