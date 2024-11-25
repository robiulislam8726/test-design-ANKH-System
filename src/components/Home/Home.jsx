import Masonry from '../Masonry/Masonry'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='max-w-[2000px]'>
        <Navbar></Navbar>
      <div className='max-w[1000px]'>
        <Banner></Banner>
        <Masonry />
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home
