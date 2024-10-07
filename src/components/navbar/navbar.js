import { Link, NavLink } from "react-router-dom";
import LxtButton from "../buttons/lxtButton";
import "./navbar.scss";

export default function Navbar() {
  const textButton = "BOOK A RINK";

  const menuItems = [
    {
      link: "About Us",
      redirect: "/about",
    },
    {
      link: "RR LXT Rink",
      redirect: "/rr",
    },
    {
      link: "Anouncement",
      redirect: "/rr",
    },
    {
      link: "Achievement",
      redirect: "/rr",
    },
    {
      link: "Media",
      redirect: "/rr",
    },
    {
      link: "Contact Us",
      redirect: "/rr",
    },
  ];

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
      </div>
    </div>
  );
}
