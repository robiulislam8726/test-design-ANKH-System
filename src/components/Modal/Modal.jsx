const Modal = () => {
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className="btn items-center">More info</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">金 明淑さん（1997年卒）</h3>
                    <p className="py-4 px-4">金社長が立ち上げた株式会社アンクシステムズ（ANKH Systems）は、「デジタルメディア全般での受託開発制作」を事業とし、現在、＂Webシステム・アプリ開発＂＂制御系システム開発＂＂デジタルコンテンツ制作＂の3つの柱を主軸にしています。

私たちが会社を訪問した際に驚いたのは、受付がソフトバンク社のロボット「Pepper」であったことです。
Pepperの声に誘導されながら、胸部のタブレットで簡単な操作をすると、受付が完了します。このPepperの受付システムは自社開発されたものでした。

金社長が、京都産業大学経営学部を卒業し、どのような道をたどって起業するまでに至ったのかを中心に話を伺いました。</p>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;