import clsx from 'clsx'
import Link from 'next/link'
import NavLinks from './NavLinks'
import Logo from './Logo'

export default function Header() {
  return (
    <header
      className={clsx('w-full border-b border-gray-700', 'px-4 py-3 mb-2')}>
      <div
        className={clsx(
          'w-full max-w-[1400px] mx-auto',
          'flex gap-4 items-center',
        )}>
        <Logo />
        <NavLinks />
      </div>
    </header>
  )
}
