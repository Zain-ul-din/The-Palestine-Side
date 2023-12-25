'use client'
/*
  Render Props Component
*/

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface ActiveLinkProps {
  match: string
  children: (isActive: boolean) => ReactNode
}

export default function ActiveLink({ match, children }: ActiveLinkProps) {
  const path = usePathname()
  return <>{children(match == path)}</>
}
