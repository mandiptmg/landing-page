const about = () => {
  return (
    <div
      id='home'
      className=' before:absolute before:top-0 before:left-0 before:h-screen before:w-full   before:bg-gradient-to-b before:-z-10 before:from-transparent before:to-black'
    >
      <div className='before:bg-blend-overlay before:bg-black/30 before:absolute before:top-0 before:left-0 before:h-screen before:w-full before:bg-[url(src/assets/top.jpg)] before:bg-scroll before:bg-no-repeat before:bg-cover before:-z-20 w-full min-h-screen grid place-items-center'>
        <div className='text-center z-10 '>
          <h1 className='text-3xl md:text-6xl capitalize text-white '>
            the west mountains
          </h1>
          <h3 className='text-lg mt-4 text-white'>
            It's better with mountains
          </h3>
        </div>
      </div>
    </div>
  )
}

export default about