import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";

const Card1 = ({ title, description }) =>
(
  <div className="bg-white shadow-lg overflow-hidden">

    <div className="px-2 py-4">
      <div>
        <h2 className="flex items-center px-2 py-4 font-bold text-lg">
        <CiLocationOn />
        {title}
        </h2>
      </div>
      <p className="text-[14px] text-gray-700">{description}</p>
    </div>
    <div className="w-full">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3241.350520341873!2d139.74271437463608!3d35.668370230682314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z5riv5Yy66JmO44OO6ZaAMi03LTE2IOOCqOOCsOOCvOOCr-ODhuOCo-ODluOCv-ODrw!5e0!3m2!1sen!2sjp!4v1732597605165!5m2!1sen!2sjp" width="600" height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
);


Card1.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card1;
