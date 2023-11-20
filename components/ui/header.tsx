import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import AquilaLogo from '@/public/images/aquila.logo.webp'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Image className="max-w-full mx-auto md:max-w-none h-auto" src={AquilaLogo} height={50} alt="Aquila Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/"
                  className="font-medium text-slate-950 hover:text-[#a47624] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-slate-950 hover:text-[#a47624] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-slate-950 hover:text-[#a47624] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-slate-950 hover:text-[#a47624] px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/" className="btn-sm text-white bg-gradient-to-r from-[#a47624] to-[#dca31f] hover:from-[#dca31f] hover:to-[#a47624] ml-3">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
