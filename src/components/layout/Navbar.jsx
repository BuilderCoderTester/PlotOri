import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('student-user'))

  const handleLogout = () => {
    localStorage.removeItem('student-user')
    window.location.href = '/'
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Community', path: '/community' },
  ]

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-800'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

        {/* Logo */}
        <Link
          to='/'
          className='text-3xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent tracking-wide'
        >
          PlotOri
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className='text-zinc-300 hover:text-green-400 transition-all duration-300 font-medium relative group'
            >
              {link.name}

              <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full'></span>
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className='hidden md:flex items-center gap-4'>
          {user ? (
            <>
              <div className='px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-sm text-zinc-300 shadow-lg'>
                {user.email}
              </div>

              <Link
                to='/student-zone'
                className='bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30'
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className='bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/30'
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to='/login'
              className='bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 px-6 py-2 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-green-500/30'
            >
              Student Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-white'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-6 space-y-5'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className='block text-zinc-300 hover:text-green-400 transition-all text-lg'
            >
              {link.name}
            </Link>
          ))}

          <div className='pt-4 border-t border-zinc-800'>
            {user ? (
              <div className='space-y-4'>
                <div className='bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-300'>
                  {user.email}
                </div>

                <Link
                  to='/student-zone'
                  onClick={() => setIsOpen(false)}
                  className='block w-full text-center bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-white font-semibold transition-all'
                >
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className='w-full bg-red-600 hover:bg-red-700 py-3 rounded-xl text-white font-semibold transition-all'
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to='/login'
                onClick={() => setIsOpen(false)}
                className='block w-full text-center bg-gradient-to-r from-green-500 to-emerald-600 py-3 rounded-xl text-white font-semibold transition-all'
              >
                Student Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}