import NavLinks from "./NavLinks";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Joe Lee's Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
