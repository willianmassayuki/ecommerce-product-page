import "../styles/components/header.scss";
import Carrinho from "./Carrinho";
const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <a className="header__logo" href="./">
          <img src="images/logo.svg" alt="Logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <Carrinho />
        <a className="usuario" href="#">
          <img src="images/image-avatar.png" alt="Profile picture" />
        </a>
      </div>
    </header>
  );
};

export default Header;
