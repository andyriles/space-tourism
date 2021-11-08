import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import Icon from "../../assets/shared/icon-hamburger.svg";
import IconClose from "../../assets/shared/icon-close.svg";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>

      <img src={Icon} alt="icon" className="icon" />
      <nav>
        <ul>
          <img src={IconClose} alt="icon" className="icon-close" />
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/Destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/Crew">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/Technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
