import Image from 'next/image'
import RootLayout from './layout'
import { Carosel } from './(components)/Carosel'

export default function Home() {
  return (
    <main>
        <Carosel/>
        <h1>Products</h1>
    </main>
  )
}
