import PropTypes from "prop-types";
import { FaMobileAlt } from "react-icons/fa";
import telephone from '../../assets/tel-fax.png';


const Card4 = ({ title, description }) =>  (
    <div className="bg-[#846AB4] p-4 w-[490px] h-[220px] overflow-hidden">
      <div className="p-4">
      <h2 className="flex mx-1 w-[300px]font-bold text-lg text-white"> <FaMobileAlt /> {title}</h2>
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
