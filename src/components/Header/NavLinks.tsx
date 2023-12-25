'use client'
import clsx from 'clsx'
import { ReactNode } from 'react'
import ActiveLink from '../util/ActiveLink'
import Link from 'next/link'

interface HeaderLink {
  heading: string
  icon: ReactNode
  link: string
}

const headerLinks: HeaderLink[] = [
  {
    heading: 'Home',
    icon: <></>,
    link: '/',
  },
  {
    heading: 'Resources',
    icon: <></>,
    link: '/resources',
  },
  {
    heading: 'videos',
    icon: <></>,
    link: '/videos',
  },
]

const NavLinks = () => (
  <nav
    className={clsx(
      'flex',
      'gap-5',
      'ml-auto',
      'items-center',
      'justify-center',
    )}>
    {headerLinks.map((link, idx) => {
      return (
        <Link key={idx} href={link.link}>
          <ActiveLink match={link.link}>
            {(isActive) => {
              return (
                <li className={clsx('list-none', isActive && 'underline')}>
                  {link.heading}
                </li>
              )
            }}
          </ActiveLink>
        </Link>
      )
    })}
  </nav>
)

export default NavLinks
