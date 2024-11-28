import PropTypes from "prop-types";
import { FaMobileAlt } from "react-icons/fa";
import telephone from '../../assets/tel-fax.png';


const Card4 = ({ title }) => (
  <div className="bg-[#846AB4] p-4 h-[220px] overflow-hidden">
    <div className="p-6">
      <h2 className="flex justify-center items-center ml-6 w-[300px] text-white">
        <FaMobileAlt />
        <div className="font-thin text-xl">
          {title}
        </div>
      </h2>
      <img className="mt-4 w-full h-auto" src={telephone} alt={title} />
    </div>
  </div>
);


Card4.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card4;
