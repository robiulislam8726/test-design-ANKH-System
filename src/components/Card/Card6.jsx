import PropTypes from "prop-types";
import ramen from '../../assets/ramen.png';
import pickupfood from '../../assets/Pickupfoods.png';

const Card6 = ({ }) => (
  <div className="items-center bg-[#E9BC06] p-4 rounded-lg h-[340px]">
    <div className="p-4">
      <img className="mb-4" src={pickupfood} alt="" />
      <div className="flex">
        <img className="mr-4 h-[204px]" src={ramen} alt="" />
        <p className="w-[217px] h-[269px]">めん徳　二代目つじ田　新橋店 1月24日にオープンしたばかりのラーメン店。 看板メニューのつけ麺は3段階に進化します。 最初はそのまま、途中ですだちを絞って爽やかに、 </p>
      </div>
    </div>
  </div>
);


Card6.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card6;
