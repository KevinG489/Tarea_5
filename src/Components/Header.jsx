import Tec from "../images/Tec.jpg";
import "./Header.css";
const Header = () => {
    return(
        <>
        <div className="header-container">
            <img className="tec" src={Tec} alt="ITT" />

        </div>
        </>
    );
};
export default Header;