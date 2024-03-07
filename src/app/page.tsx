import { Catalog } from '@/components/catalog'
import { Header } from '@/components/header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <Catalog />
    </main>
  )
}
