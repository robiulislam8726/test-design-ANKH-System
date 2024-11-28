import PropTypes from "prop-types";
import photo from '../../assets/photo.png';
import { FaGraduationCap } from "react-icons/fa";


const Card5 = ({ title}) =>  (
  <div className="bg-red-50 shadow-lg p-4 overflow-hidden">
  <div className="p-4">
    <h2 className="flex mt-4 mb-12 font-bold text-lg">
      <FaGraduationCap />
     <div className="mx-2">
     {title}
     </div>
      </h2>

    <img className="w-full h-auto" src={photo} alt={title} />
    <p className="py-8">虎ノ門駅を出てすぐ、虎ノ門交差点付近に鎮座するこの銅像。 これ、なんだかお分かりでしょうか？ そう、猫です。というのは嘘で予想どおり、虎です(笑) 虎ノ門だけに虎の銅像なんです！ そもそもどうして、ここの地名が「虎ノ門」なのか気になりませんか？</p>
  </div>
</div>
    
  );


Card5.propTypes = {
  title: PropTypes.string.isRequired,      
  description: PropTypes.string.isRequired,      
};

export default Card5;
