import { Catalog } from '@/components/catalog'
import { Header } from '@/components/header'

export default function Home() {
  const URL = `${process.env.NEXT_API_BASE_URL}/products`
  console.log(URL)

  // fetch(URL)
  //   .then((res) => res.json())
  //   .then(console.log)

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <Catalog />
    </main>
  )
}
