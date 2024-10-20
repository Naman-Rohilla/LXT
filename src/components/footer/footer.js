import { Link } from "react-router-dom";
import menuItems from "../../jsons/menuItems";
import LxtButton from "../buttons/lxtButton";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="form-footer">
          <img src="skate1.png"></img>
          <div className="form-container">
            <div className="form-heading">Stay Informed with News & Events</div>
            <div className="input-container">
              <input placeholder="First Name" />
              <input placeholder="Email Address" />
              <LxtButton text={"JOIN US"} color={"red"} />
            </div>
          </div>
          <img src="skate2.png"></img>
        </div>
        <div className="footer-nav">
          {menuItems.map((mt) => (
            <Link to={mt.redirect} className="item" exact>
              {mt.link}
            </Link>
          ))}
        </div>
        <div className="footer-description">
          Our mission is to inspire and empower young skaters, especially those
          who need support the most, to reach their full potential as skilled,
          responsible, and caring athletes.
        </div>
        <div className="footer-divider"></div>
        <div className="footer-end">© Rahul Rane 2024, All Rights Reserved</div>
      </div>
    </>
  );
}
