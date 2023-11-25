import img1 from '../assets/mountain/alaska.jpg'
import img2 from '../assets/mountain/nepal.jpg'
import img3 from '../assets/mountain/iceland.jpg'
import img4 from '../assets/mountain/japan.jpg'
import img5 from '../assets/mountain/usa.jpg'
import img6 from '../assets/mountain/norway.jpg'
import { useState } from 'react'

const data = [
  { img: img1, title: 'west mountains trek', country: 'alaska' },
  { img: img2, title: 'west mountains peak', country: 'nepal' },
  { img: img3, title: 'west mountains sail', country: 'iceland' },
  { img: img4, title: 'west mountains visit', country: 'japan' },
  { img: img5, title: 'west mountains travel', country: 'usa' },
  { img: img6, title: 'west mountains camp', country: 'norway' },
]

const Explore = () => {
  const [show ,setShow] = useState(false)
  return (
    <div id='explore' className='w-full pt-28 h-full'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl  mb-4'>
          Explore the world with West Compass
        </h1>
        <h6 className='max-w-2xl m-auto'>
          We seek to provide the most authentic content from adventtures,
          explore and travellers around the World. Our long-term mission is to
          educate, inspire and enable all peoples to experience & protect
          wilderness
        </h6>
      </div>
      <div className='mt-20  grid grid-cols-2 md:grid-cols-3 gap-4'>
      {show ? data.map((item) => {
            const { title, img, country } = item
            return (
              <article className='rounded-xl text-center relative '>
                <img
                  src={img}
                  alt={title}
                  className='rounded-xl  hover:opacity-50 cursor-pointer aspect-[3/4] object-cover'
                />
                <div className='absolute md:text-xl bottom-7 left-auto w-full'>
                  <h1 className='capitalize'>{title}</h1>
                  <h3 className='uppercase'>{country}</h3>
                </div>
              </article>
            )
          }).slice(0): data.map((item) => {
            const { title, img, country } = item
            return (
              <article className='rounded-xl text-center relative '>
                <img
                  src={img}
                  alt={title}
                  className='rounded-xl  hover:opacity-50 cursor-pointer aspect-[3/4] object-cover'
                />
                <div className='absolute md:text-xl bottom-7 left-auto w-full'>
                  <h1 className='capitalize'>{title}</h1>
                  <h3 className='uppercase'>{country}</h3>
                </div>
              </article>
            )
          }).slice(0,3)}
      </div>
      <div className='text-center mt-7'>
        <button  onClick={()=>setShow(!show)} className='uppercase text-blue-700 font-medium'>see {show ? 'less':'more'}</button>
      </div>
    </div>
  )
}

export default Explore