import PropTypes from "prop-types";

const Card2 = ({ title, description, image }) =>  (
    <div className="bg-white shadow-lg file:overflow-hidden">
      <img className="w-full h-[250px]" src={image} alt={title} />
      <div className="p-4">
        <h2 className="mb-2 font-bold text-lg">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );


Card2.propTypes = {
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired,        
};

export default Card2;
