import PropTypes from "prop-types";
import { FaCamera } from "react-icons/fa";
import photo1 from '../../assets/photo1.png';
import photo2 from '../../assets/photo2.png';
import photo3 from '../../assets/photo3.png';
import photo4 from '../../assets/photo4.png';

const Card3 = ({ title }) => (
  <div className="bg-white shadow-lg overflow-hidden">
    <div className="">
      <h2 className="flex items-center px-2 py-4 font-bold text-lg">
        <FaCamera />
        <div className="px-2">
          {title}
        </div>
      </h2>
      <div className="flex grid-cols-2 row-span-2">
        <img className="p-4 w-full h-[250px]" src={photo1} alt={title} />
        <img className="p-4 w-full h-[250px]" src={photo2} alt={title} />
        <img className="p-4 w-full h-[250px]" src={photo3} alt={title} />
        <img className="p-4 w-full h-[250px]" src={photo4} alt={title} />
      </div>
    </div>
  </div>
);


Card3.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card3;
