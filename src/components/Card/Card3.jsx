import PropTypes from "prop-types";
import { FaCamera } from "react-icons/fa";
import photo1 from '../../assets/photo1.png';
// import photo2 from '../../assets/photo2.png';
// import photo3 from '../../assets/photo3.png';
// import photo4 from '../../assets/photo4.png';

const Card3 = ({ title, image }) => (
  <div className="gap-4 bg-red-50 shadow-lg rounded-lg overflow-hidden">
    <div className="p-4">
      <h2 className="flex font-bold text-lg"><FaCamera />{title}</h2>
      <div className="grid-cols-2">
        <img className="w-full h-auto" src={photo1} alt={title} />
        {/* <img className="w-full h-auto" src={photo2} alt={title} /> */}
        {/* <img className="w-full h-auto" src={photo3} alt={title} /> */}
        {/* <img className="w-full h-auto" src={photo4} alt={title} /> */}
      </div>
    </div>
  </div>
);


Card3.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card3;
