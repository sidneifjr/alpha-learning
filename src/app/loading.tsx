import Image from 'next/image'

export default function RootLoading() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <Image
        src={'/loader.svg'}
        alt="Loader"
        width={120}
        height={120}
        quality={100}
      />
    </section>
  )
}
