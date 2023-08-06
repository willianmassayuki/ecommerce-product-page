import "../styles/components/header.scss";
import { useState } from "react";
import Carrinho from "./Carrinho";

type VoteCountProps = {
  votes: number;
  setVotes: any;
};

const Header = ({ votes, setVotes }: VoteCountProps) => {
  let [showMenu, setShowMenu] = useState<boolean>(false);

  function handleClickMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header className="header">
      <div className="header__left">
        <button className="menu-button mobile" onClick={handleClickMenu}>
          <img src="/images/icon-menu.svg" alt="Menu" />
        </button>
        <a className="header__logo" href="./">
          <img src="/images/logo.svg" alt="Logo" />
        </a>
        <div
          className="modal-overlay"
          id={`${showMenu === true && "showModal"}`}
        >
          <nav
            className="menu-top desktop"
            id={`${showMenu === true && "showMenu"}`}
          >
            <button className="mobile" onClick={handleClickMenu}>
              <img src="/images/icon-close.svg" alt="Close" />
            </button>
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
      </div>
      <div className="header__right">
        <Carrinho />
        <a className="usuario" href="#">
          <img src="/images/image-avatar.png" alt="Profile picture" />
        </a>
      </div>
    </header>
  );
};

export default Header;
