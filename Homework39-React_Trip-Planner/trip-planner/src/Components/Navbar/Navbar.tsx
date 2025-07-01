import "./Navbar.css";
import type { LinkModels } from "../../models/links.model";

interface NavbarProps {
  linkData: LinkModels[];
  onClickedContinent: (continent: string) => void;
}

function Navbar({ linkData, onClickedContinent }: NavbarProps) {
  return (
    <nav className="Navbar">
      <ul>
        {linkData.map((link, i) => (
          <li key={i}>
            <a
              href="#"
              onClick={() => {
                onClickedContinent(link.page);
              }}
            >
              {link.page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
