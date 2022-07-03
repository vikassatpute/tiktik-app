import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../utils/tiktik-logo.png'

const Navbar = () => {
  return (
    <div className="w-full flex justify-content items-center py-2 px-2 border-b-2 border-gray-200">
      <Link href="/">
        <div className="md:w-[130px] w-[100px]">
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
