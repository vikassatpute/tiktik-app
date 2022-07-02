import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <div>
      Navbar
      <div className="flex gap-6 xl:gap-20">
        <div className="h-[92vh] overflow-hidden xl:overflow-auto">Sidebar</div>
        <div className="mt-4 flex flex-col ga-10 overflow-auto h-[88vh] videos flex-1"></div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
