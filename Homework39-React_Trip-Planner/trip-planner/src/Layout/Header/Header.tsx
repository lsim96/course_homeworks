import Navbar from "../../Components/Navbar/Navbar";

import "./Header.css";

interface HeaderProps {
  title: string;
  continents: string[];
  onClickedContinent: (continent: string) => void;
}

function Header({ title, continents, onClickedContinent }: HeaderProps) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Navbar onClickedContinent={onClickedContinent} linkData={continents} />
    </header>
  );
}

export default Header;
