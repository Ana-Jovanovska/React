import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { LinkData } from "../../models/core.model";

interface NavbarProps {
  linkDataArr: LinkData[];
}

function Navbar({ linkDataArr }: NavbarProps) {
  return (
    <nav className="Navbar">
      <ul>
        {linkDataArr.map((link, i) => (
          <li key={i}>
            <NavLink end={true} to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
