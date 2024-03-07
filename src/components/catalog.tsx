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
      <h2 className="py-8 text-2xl font-bold tracking-tight">Catálogo</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product: ProductProps) => {
          return (
            <Link key={product.id} href="/" className="h-full">
              <Card>
                <CardHeader className="flex border-b pb-4">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={333}
                    quality={100}
                  />

                  <CardTitle className="flex justify-between pt-2 tracking-tight">
                    <div>
                      <span>
                        {product.title}, {product.brand}
                      </span>

                      <span className="!mt-1 flex items-center gap-1 text-sm">
                        <Star height={16} width={16} />
                        {product.rating}
                      </span>

                      {/* <span className="inline-flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full border border-gray-600 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-gray-200 transition hover:border-gray-500">
                        {product.category}
                      </span> */}
                    </div>

                    <div className="flex flex-col items-end">
                      <span>
                        {new Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(product.price)}
                      </span>

                      {/* <span className="!mt-1">
                        {product.discountPercentage}%
                      </span> */}
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="py-6">
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
