import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";

const Card1 = ({ title, description, image }) => 
   (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      
      <div className="p-4">
        <h2 className="flex mb-2 font-bold text-lg"><CiLocationOn />{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <img className="w-full h-auto" src={image} alt={title} />
    </div>
  );


Card1.propTypes = {
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,       
};

export default Card1;
