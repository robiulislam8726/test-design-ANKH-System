import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Modal from "../Modal/Modal";
const Root = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
            <Modal></Modal>
            <Footer></Footer>
        </div>
    );
};
export default Root;