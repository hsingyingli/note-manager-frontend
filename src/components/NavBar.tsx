import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

const NavBar = () => {
  return (
    <div className='py-3 px-4 flex items-center justify-between'>
      <Link href="/" className='cursor-pointer'>
        <Image 
          src="/assets/images/logo.png" 
          alt='logo' 
          width={102}
          height={34}
          className="dark:invert aspect-[3/1] w-[102px]"
          priority
        />
      </Link>
      <div className='flex items-center'>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default NavBar
