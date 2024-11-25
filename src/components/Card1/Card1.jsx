import PropTypes from "prop-types";

const Card = ({ title, description }) => {
  return (
    <div>
    <div class="bg-base-100 shadow-xl w-full card">
    </div>
    <div class="items-center text-center card-body">
     
    </div>
  </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired        
};

export default Card;