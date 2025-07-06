import "./Navbar.css";
import type { LinkModels } from "../../models/links.model";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  linkData: LinkModels[];
}

function Navbar({ linkData }: NavbarProps) {
  return (
    <nav className="Navbar">
      <ul>
        {linkData.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>{link.page}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
