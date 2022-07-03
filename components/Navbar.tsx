import Image from 'next/image'
import Link from 'next/link'
import Logo from '../utils/tiktik-logo.png'

const Navbar = () => {
  return (
    <div className="justify-content flex w-full items-center border-b-2 border-gray-200 py-2 px-2">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            className="cursor-pointer"
            src={Logo}
            alt="Tiktik"
            layout="responsive"
          />
        </div>
      </Link>
    </div>
  )
}

export default Navbar
