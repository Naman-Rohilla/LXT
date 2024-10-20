import { Link, NavLink } from "react-router-dom";
import LxtButton from "../buttons/lxtButton";
import "./navbar.scss";
import menuItems from "../../jsons/menuItems";

export default function Navbar() {
  const textButton = "BOOK A RINK";

  return (
    <div className="navbar">
      <div className="navbar-container">
        <dic className="logo">
          <img src="lxtlogo.png" />
        </dic>
        <div className="menu-items">
          {menuItems.map((mt) => (
            <Link to={mt.redirect} className="item" exact>
              {mt.link}
            </Link>
          ))}
          <LxtButton text={textButton} color="red" borderColor={"none"} />
        </div>
        {/* <div className="mobile-bottom-nav">
          {menuItems.map((mt) => (
            <Link to={mt.redirect} className="item" exact>
              {mt.link}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}
