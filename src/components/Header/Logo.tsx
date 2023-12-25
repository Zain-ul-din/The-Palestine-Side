import Link from 'next/link'
import clsx from 'clsx'

/* eslint-disable @next/next/no-img-element */
const Logo = () => (
  <Link href={'/'}>
    <div
      className={clsx(
        'flex items-center gap-1',
        'font-bold justify-self-start',
      )}>
      <img
        src='/images/palestine_flag_logo.png'
        alt='palestine_flag_logo'
        className='text-sm font-light w-[30px] h-[30px]'
      />
      The Palestine Side
    </div>
  </Link>
)

export default Logo
