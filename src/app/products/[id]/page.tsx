import { Package } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { env } from '@/env'
import { convertToCurrency } from '@/utils/convertToCurrency'

type PageProps = {
  params: {
    id: string
  }
}

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

export async function generateMetadata({ params }: PageProps) {
  return {
    title: `${params.id}`,
  }
}

export default async function Products({ params }: PageProps) {
  const getProduct = (await fetch(
    `${env.NEXT_API_BASE_URL}/products/${params.id}`
  ).then((response) => response.json())) as ProductProps

  const productPrice = convertToCurrency(getProduct.price)

  return (
    <section className="pt-16">
      <div className="mx-auto flex max-w-[1400px] justify-between">
        <div className="h-[600px] w-[600px] rounded border">
          <Carousel className="h-[600px]">
            <CarouselContent className="h-[600px]">
              {getProduct.images.map((image) => {
                return (
                  <CarouselItem key={crypto.randomUUID()} className="h-full">
                    <Image
                      alt={getProduct.title}
                      width={660}
                      height={660}
                      src={image}
                      className="h-[600px] object-contain"
                    />
                  </CarouselItem>
                )
              })}
            </CarouselContent>

            <CarouselPrevious className="left-0 top-[105%]" />
            <CarouselNext className="right-0 top-[105%]" />
          </Carousel>
        </div>

        <div className="flex flex-1 flex-col pl-6">
          <span className="tracking-tight text-gray-400">
            {getProduct.brand}
          </span>

          <h2 className="text-2xl font-bold tracking-tight">
            {getProduct.title}
          </h2>

          <Badge className="max-w-24 tracking-tight">
            {getProduct.category}
          </Badge>

          <p className="my-8 flex-1">{getProduct.description}</p>

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-xl tracking-tight text-green-400">
                {productPrice}
              </span>

              <span className="flex gap-2">
                <Package /> {getProduct.stock}
              </span>
            </div>

            <Button className="w-full uppercase tracking-tight">Comprar</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
