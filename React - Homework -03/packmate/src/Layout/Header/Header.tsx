import Navbar from "../../Components/NavBar/NavBar";
import { LinkData } from "../../models/core.model";
import "./Header.css";

interface HeaderProps {
  title: string;
  linkDataArr: LinkData[];
}

function Header({ title, linkDataArr }: HeaderProps) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Navbar linkDataArr={linkDataArr} />
    </header>
  );
}

export default Header;
