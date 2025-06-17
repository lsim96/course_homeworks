import "./Navbar.css";

interface NavbarProps {
  linkData: string[];
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
                onClickedContinent(link);
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
