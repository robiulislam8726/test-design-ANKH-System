import Masonry from "../Masonry/Masonry";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
           
            <Masonry/>
            <Footer></Footer>

        </div>
    );
};

export default Home;