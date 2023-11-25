import img from '../assets/images.png'
import { FiSearch } from 'react-icons/fi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 720) {
        setOpen(false)
      }
    }

    handleScroll() // Initial check on mount

    // Attach the event listener
    window.addEventListener('resize', handleScroll)

    // Cleanup: remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleScroll)
    }
  }, [])
  return (
    <div className='w-full'>
      <div className='flex justify-end h-20 md:justify-center items-center'>
        <div className='hidden md:block'>
          <ul className='flex  uppercase text-base font-medium text-white items-center justify-center gap-x-10'>
            <li>
              <a href='#home'>about us</a>
            </li>
            <li>
              <a href='#explore'>Explore</a>
            </li>
            <li>
              <a href='#home'>
                <img
                  src={img}
                  className='w-8 text-white mix-blend-color-burn'
                  alt='logo'
                />
              </a>
            </li>
            <li>
              <a href='#journal'>journal</a>
            </li>
            <li className='flex gap-1 items-center'>
              <FiSearch />
              search
            </li>
          </ul>
        </div>

        <button
          className={
            open
              ? 'text-2xl fixed inset-y md:hidden z-30'
              : 'text-2xl  md:hidden z-20'
          }
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={
          open
            ? 'fixed pt-40 overflow-y-hidden top-0 w-full z-20 bg-black h-screen left-0 '
            : 'hidden'
        }
      >
        <ul
          onClick={() => setOpen(false)}
          className=' uppercase text-2xl font-medium text-4xl text-slate-400 grid text-center gap-y-10'
        >
          <li>
            <a href='#home'>about us</a>
          </li>
          <li>
            <a href='#explore'>Explore</a>
          </li>
          <li>
            <a href='#home'>W</a>
          </li>
          <li>
            <a href='#journal'>journal</a>
          </li>
          <li>search</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
