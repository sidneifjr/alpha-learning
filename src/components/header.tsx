import { Pyramid } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full border-b border-slate-300">
      <div className="mx-auto max-w-[1400px] py-6">
        <Link href="/">
          <h1 className="relative flex gap-2">
            <Pyramid height={36} width={36} />
            <span className="text-3xl font-bold tracking-tight"> Alpha</span>
            {/* <span className="text-xl font-normal">Learning</span> */}
          </h1>
        </Link>
      </div>
    </header>
  )
}
