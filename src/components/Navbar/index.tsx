import Image from 'next/image'
import Link from 'next/link'
import UserDropDown from '@/components/Navbar/UserDropDown'
import ThemeSwitcher from '@/components/Navbar/ThemeSwitcher'


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
      <div className='flex gap-1 items-center'>
        <ThemeSwitcher />
        <UserDropDown />
      </div>
    </div>
  )
}

export default NavBar
