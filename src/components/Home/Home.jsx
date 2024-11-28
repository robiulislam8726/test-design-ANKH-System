import Masonry from '../Masonry/Masonry'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import Navbar from '../Navbar/Navbar'
import Board from '../Board/Board'
import CompanyLogo from '../CompanyLogo/CompanyLogo'


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mx-auto max-w-[1000px]'>
        <Banner></Banner>
        <div>
          <Board></Board>
        </div>

        <Masonry />
      </div>
      <div className='p-4 text-center'>
        <h2 className='text-3xl'>新しくなった東京オフィスへぜひお越しください。</h2>
      </div>
      <div>
        <CompanyLogo></CompanyLogo>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
