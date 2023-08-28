import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './Components/Navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Head>
        <title>Bunting Coder</title>
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
