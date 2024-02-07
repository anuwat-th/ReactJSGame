import "../style/global/global.scss"
import "../style/components/FooterStyle.scss"

const Footer = () => {
    return (
        <div className="Footer">
            <p className="footerPrimary">นายอนุวัฒน์ ทองคำ&nbsp;<span>643020060-0</span></p>
            <p className="footerSecondary">College of Computing, Khon Kaen University</p>
        </div>
    );
}

export default Footer;