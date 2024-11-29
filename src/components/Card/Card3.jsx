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
      <div className="flex grid-cols-2 grid-rows-3 m-2 p-4">
        <div>
          <img className="row-span-3" src={photo1} alt={title} />
        </div>
        <div className="grid-cols-1">
          <img className="row-span-1" src={photo2} alt={title} />
          <img className="row-span-1" src={photo3} alt={title} />
          <img className="row-span-1" src={photo4} alt={title} />
        </div>
      </div>
    </div>
  </div>
);

//p-4 w-full h-[250px]
Card3.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card3;
