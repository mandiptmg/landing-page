import img1 from '../assets/journey/moon.jpg'
import img2 from '../assets/journey/explore.jpg'
import img3 from '../assets/journey/waterfall.jpg'
import img4 from '../assets/journey/meditation.jpg'
import img5 from '../assets/journey/destinations.jpg'
import img6 from '../assets/journey/adventurous.jpg'
import { useState } from 'react'

const data = [
  { img: img1, title: 'An unforgettable', desc:"I'm Steve parker, This was an unforgettable memory from my journey" ,},
  { img: img2, title: 'into the wild', desc:"When we walked into the wilds, everything will change and move so slow"  },
   { img: img3, title: 'An unforgettable', desc:"I'm Steve parker, This was an unforgettable memory from my journey" ,},
  { img: img4, title: 'into the wild', desc:"When we walked into the wilds, everything will change and move so slow"  },
   { img: img5, title: 'An unforgettable', desc:"I'm Steve parker, This was an unforgettable memory from my journey" ,},
  { img: img6, title: 'into the wild', desc:"When we walked into the wilds, everything will change and move so slow"  },
]

const Journal = () => {
  const [show,setShow] = useState(false);
  return (
    <div id='journal' className='w-full pt-36 h-full'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl  mb-4'>The Journal</h1>
        <h6 className='max-w-2xl m-auto'>
          Our Favourite stories and photoes from west compas family. We walked a
          long way from North to South & East to West.
        </h6>
      </div>
      <div className='mt-20 w-full grid grid-cols-2 gap-4 md:gap-y-8'>
        {show
          ? data
              .map((item) => {
                const { title, img, desc } = item
                return (
                  <article className='rounded-xl text-center w-full h-full md:w-80 m-auto '>
                    <img
                      src={img}
                      alt={title}
                      className='rounded-xl aspect-square w-full object-cover'
                    />
                    <div className='md:text-xl font-mono '>
                      <h1 className='capitalize my-4'>{title}</h1>
                      <h3 className='text-sm'>{desc}</h3>
                    </div>
                  </article>
                )
              })
              .slice(0)
          : data
              .map((item) => {
                const { title, img, desc } = item
                return (
                  <article className='rounded-xl text-center w-full h-full md:w-80 m-auto '>
                    <img
                      src={img}
                      alt={title}
                      className='rounded-xl aspect-square w-full object-cover'
                    />
                    <div className='md:text-xl font-mono '>
                      <h1 className='capitalize my-4'>{title}</h1>
                      <h3 className='text-sm'>{desc}</h3>
                    </div>
                  </article>
                )
              })
              .slice(0, 2)}
      </div>
      <div className='text-center mt-7'>
        <button
          onClick={() => setShow(!show)}
          className='uppercase text-blue-700 font-medium'
        >
          {show? 'no':'all'} posts
        </button>
      </div>
    </div>
  )
}

export default Journal
