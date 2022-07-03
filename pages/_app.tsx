import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  if (isSSR) return null

  return (
    <div>
      <Navbar />
      <div className="flex gap-6 xl:gap-20">
        <div className="h-[92vh] overflow-hidden xl:overflow-auto">
          <Sidebar />
        </div>
        <div className="ga-10 videos mt-4 flex h-[88vh] flex-1 flex-col overflow-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default MyApp
