import Navbar from "../../Components/Navbar/Navbar";
import type { LinkModels } from "../../models/links.model";
import "./Header.css";

interface HeaderProps {
  title: string;
  continents: LinkModels[];
}

function Header({ title, continents }: HeaderProps) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Navbar linkData={continents} />
    </header>
  );
}

export default Header;
