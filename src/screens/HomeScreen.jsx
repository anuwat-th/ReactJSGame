import "../style/global/global.scss"
import "../style/screens/HomeScreenStyle.scss"
import Footer from "../components/Footer";
const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <div className="heroSection">
                <div className="heroVector"></div>
                <h1 className="heroTitle">ยินดีต้อนรับสู่เกมส์จับคู่ภาพ <br />ด้วย ReactJS</h1>
                <p className="heroDescription">สร้างโดย นายอนุวัฒน์ ทองคำ วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น</p>
                <div className="buttonPlayContainer">
                    <div className="buttonPlay">
                        เล่น
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default HomeScreen;