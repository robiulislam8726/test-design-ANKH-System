const Card1 = () => {
    return (
        <div class="flex  h-64 grid-cols-1 md:grid-cols-2 ">
            <div class=" grid bg-green-600 flex-grow place-items-center">
                <p className="m-12">
                    We just moved to TORANOMON 4th March 2014
                </p>
            </div>

            <div class="grid m-12 flex-grow place-items-center">
                <p>  このたび弊社は、東京オフィスを東京都港区虎ノ門に移転し ２０１４年３月４日(火)大安より営業の運びとなりました。 新オフィスは、打ち合わせスペースも多くありますので お近くにお越しの際はどうぞお気軽にお立ち寄りください。 今後とも弊社をどうぞよろしくお願い申し上げます。</p>
            </div>
        </div>
    );
};
export default Card1;