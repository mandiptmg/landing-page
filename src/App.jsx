import About from './component/About'
import Journey from './component/Journey'
import Explore from './component/Explore'
import Header from './component/Header'
import Footer from './component/Footer'
const App = () => {
  return (
    <div>
      <div className='md:w-[80vw] w-[90vw] m-auto'>
        <Header />
        <About />
        <Explore />
        <Journey />
      </div>
      <Footer/>
    </div>
  )
}

export default App
