
import banner from '../../assets/banner.png';
import toranamon from '../../assets/TORANOMON.png';


const Banner = () => {
    return (
      <div className="relative w-full">
        {/* Banner Image */}
        <img src={banner} className="w-full h-full object-cover"/>
        {/* Title */}
        <div className="top-6 left-0 absolute flex flex-col justify-center items-center bg-black bg-opacity-50 w-full md:h-[150px]">
          {/* <h1 className="font-bold text-6xl text-white"><span className="font-thin">Hello</span> Toramon</h1> */}
          <img src={toranamon} alt="" />
          <h4 className="mt-2 text-white">あいうえお かきくけこ さしすせそ たちつてと なにぬねの はひふへほ まみむめも やゆよ らりるれろ わをん</h4>
        </div>
      </div>
    );
  };
  
  export default Banner;