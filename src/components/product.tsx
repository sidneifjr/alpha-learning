import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { convertToCurrency } from '@/utils/convertToCurrency'

import { Badge } from './ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from './ui/card'

type ProductProps = {
  content: {
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
}

export const Product = ({ content }: ProductProps) => {
  const productPrice = convertToCurrency(content.price)

  const priceAfterDiscount =
    content.price - content.price * (content.discountPercentage / 100)

  return (
    <Link href={`/products/${content.id}`} className="h-full">
      <Card className="flex h-full flex-col">
        <CardHeader className="flex border-b p-4">
          <Image
            src={content.thumbnail}
            alt={content.title}
            width={500}
            height={300}
            quality={100}
            className="h-52 object-cover object-top"
          />

          <div className="flex pt-2">
            <div className="flex flex-col tracking-tight">
              <strong className="tracking-tight">{content.title}</strong>

              <span className="tracking-tight">{content.brand}</span>
            </div>

            <div className="relative flex flex-1 flex-col items-end">
              <span className="tracking-tight text-gray-500 line-through">
                {productPrice}
              </span>

              <span className="tracking-tight text-green-400">
                {convertToCurrency(priceAfterDiscount)}
              </span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex-1 p-4">
          <CardDescription className="leading-relaxed">
            {content.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t p-4">
          <Badge>{content.category}</Badge>

          <span className="flex items-center gap-1">
            {content.rating}
            <Star height={20} width={20} />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
