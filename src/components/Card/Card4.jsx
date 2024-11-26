import PropTypes from "prop-types";
import { FaMobileAlt } from "react-icons/fa";


const Card4 = ({ title, description }) =>  (
    <div className="bg-red-50 shadow-lg p-4 rounded-lg overflow-hidden">
      <div className="p-4">
      <h2 className="w-[300px] font-bold text-lg"> <FaMobileAlt /> {title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );


Card4.propTypes = {
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,        
};

export default Card4;
