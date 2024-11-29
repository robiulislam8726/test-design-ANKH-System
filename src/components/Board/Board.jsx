const Board = () => {
    return (
        <div className="flex md:flex-row flex-col mx-auto mt-2 max-w-[1000px] h-auto md:h-[260px]">
            {/* Left Section*/}
            <div className="bg-green-600 p-4 md:pt-9 md:pr-14 md:pb-9 md:pl-14 w-full md:w-[450px]">
                <h2 className="text-justify text-white">  
                    <span className="block font-thin text-4xl">We just moved to</span>
                    <span className="block font-bold text-4xl">TORANOMON</span>
                    <span className="block font-thin text-5xl">4th March 2014 </span>
                </h2>
            </div>


            {/* Right Section*/}

            <div className="pt-9 pr-10 pb-9 pl-10 w-[550px]">
                <p className="font-hirakakupro text-center text-sm md:text-center">このたび弊社は、東京オフィスを東京都港区虎ノ門に移転し ２０１４年３月４日(火)大安より営業の運びとなりました。 新オフィスは、打ち合わせスペースも多くありますので お近くにお越しの際はどうぞお気軽にお立ち寄りください。 今後とも弊社をどうぞよろしくお願い申し上げます。 </p>

            </div>
        </div>
    );
};

export default Board;