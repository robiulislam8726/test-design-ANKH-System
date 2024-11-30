import title from '../../assets/title.png';

const Board = () => {
  return (
    <div className="flex justify-center items-center bg-[#DC5E48] font-hirakakupro">

      <img className='w-[307px] h-[70px]' src={title} alt="" />
      <div className='flex justify-center items-center'>
        <p></p>
        <div></div>
        <div></div>
      </div>
      <div className='flex justify-center items-center'>
        <div></div>
        <div></div>
      </div>


    </div>
  );
};

export default Board;