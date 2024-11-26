import Masonry from '../Masonry/Masonry'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Board from '../Board/Board'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mx-auto max-w-[1000px]'>
        <Banner></Banner>
        <Board></Board>
        
        <Masonry />
      </div>
      

      <Footer></Footer>
    </div>
  )
}

export default Home
