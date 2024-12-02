import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Restaurant = () => {
    return (
      <div className="flex">
            <button className="btn btn-primary">Restaurant Order</button>
            <Marquee pauseOnHover={true} speed={80}>
                 <Link to="/">Since 2014, this is the most popular restaurant in osaka , stay healthy and happy  enjoy your life. thank you</Link>   
            </Marquee>
        </div>
    );
  };
  export default Restaurant;

  
