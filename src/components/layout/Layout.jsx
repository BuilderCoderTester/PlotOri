import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='min-h-screen bg-black text-white'>
      <Navbar />

      <main className='pt-24'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}