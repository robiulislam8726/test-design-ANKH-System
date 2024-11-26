import PropTypes from "prop-types";
import photo from '../../assets/photo.png';
import { FaGraduationCap } from "react-icons/fa";


const Card5 = ({ title, description }) =>  (
  <div className="bg-red-50 shadow-lg p-4 rounded-lg overflow-hidden">
  <div className="p-4">
    <h2 className="flex mt-4 mb-12 font-bold text-lg"><FaGraduationCap />{title}</h2>
  
    <img className="w-full h-auto" src={photo} alt={title} />
  </div>
</div>
    
  );


Card5.propTypes = {
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired,      
};

export default Card5;
