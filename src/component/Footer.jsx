const Footer = () => {
  return (
    <footer className='bg-gradient-to-t from-transparent to-black'>
      <div className=' relative h-[70vh] before:bg-blend-overlay before:bg-black/50  mt-10 before:bottom-0 before:absolute before:left-0 before:w-full before:h-[70vh] before:bg-cover before:-z-10 before:bg-[url("https://c4.wallpaperflare.com/wallpaper/758/252/42/firewatch-video-games-mountains-nature-wallpaper-preview.jpg")] before:bg-no-repeat flex md:items-end flex-col-reverse  md:flex-row gap-4 md:py-10 justify-center md:justify-center'>
        <p className="text-center md:mt-0 mt-4">2023 The Great Outdoor All rights Reserved</p> <span className="md:block hidden">|</span>
        <ul className='flex md:flex-row flex-col capitalize text-base text-white items-center md:justify-center gap-10'>
          <li>
            <a href='#home'>about us</a>
          </li>
          <li>
            <a href='#explore'>Explore</a>
          </li>

          <li>
            <a href='#journal'>journal</a>
          </li>
          <li>search</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
