import React, { useContext, useEffect } from "react";
import UserContext from "./service/UserContext";

const NavComponent = () => {
  const { user } = useContext(UserContext);

  const navComponent = [
    {
      home: "Home",
      about: "About",
      houseTours: "House tours",
      contact: "Contact",
      meeting: "Book a meeting",
    },
  ];

  const navComponentDisplay = navComponent.map((n) => (
    <>
      <ul className="menu">
        <li>
          <a className="menu-item" href="#home">
            {n.home}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#about">
            {n.about}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#house-tours">
            {n.houseTours}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#contact">
            {n.contact}
          </a>
        </li>
        <li>
          <a className="add-new btn" href="#add-new">
            {n.meeting}
          </a>
        </li>
      </ul>
    </>
  ));

  return (
    <div>

      <nav className="navbar">
        <div className="header">
        <div className="logo-user-container">
          <svg
            className="logo"
            width="111"
            height="42"
            viewBox="0 0 111 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="21" cy="21" r="21" fill="#FFC044" />
            <path
              d="M28.424 20.624H39.208V24.656H28.424V20.624ZM28.808 29.84H41V34H23.656V11.6H40.584V15.76H28.808V29.84ZM49.2885 34L42.0565 16.784H47.2085L53.2245 31.6H50.6645L56.9045 16.784H61.7045L54.4405 34H49.2885ZM63.7415 34V16.784H68.7335V34H63.7415ZM66.2375 14.384C65.3202 14.384 64.5735 14.1173 63.9975 13.584C63.4215 13.0507 63.1335 12.3893 63.1335 11.6C63.1335 10.8107 63.4215 10.1493 63.9975 9.616C64.5735 9.08267 65.3202 8.816 66.2375 8.816C67.1548 8.816 67.9015 9.072 68.4775 9.584C69.0535 10.0747 69.3415 10.7147 69.3415 11.504C69.3415 12.336 69.0535 13.0293 68.4775 13.584C67.9228 14.1173 67.1762 14.384 66.2375 14.384ZM73.3665 34V10.256H78.3585V34H73.3665ZM82.9915 34V10.256H87.9835V34H82.9915ZM103.177 34V30.64L102.857 29.904V23.888C102.857 22.8213 102.526 21.9893 101.865 21.392C101.225 20.7947 100.233 20.496 98.8885 20.496C97.9712 20.496 97.0645 20.6453 96.1685 20.944C95.2938 21.2213 94.5472 21.6053 93.9285 22.096L92.1365 18.608C93.0752 17.9467 94.2058 17.4347 95.5285 17.072C96.8512 16.7093 98.1952 16.528 99.5605 16.528C102.185 16.528 104.222 17.1467 105.673 18.384C107.123 19.6213 107.849 21.552 107.849 24.176V34H103.177ZM97.9285 34.256C96.5845 34.256 95.4325 34.032 94.4725 33.584C93.5125 33.1147 92.7765 32.4853 92.2645 31.696C91.7525 30.9067 91.4965 30.0213 91.4965 29.04C91.4965 28.016 91.7418 27.12 92.2325 26.352C92.7445 25.584 93.5445 24.9867 94.6325 24.56C95.7205 24.112 97.1392 23.888 98.8885 23.888H103.465V26.8H99.4325C98.2592 26.8 97.4485 26.992 97.0005 27.376C96.5738 27.76 96.3605 28.24 96.3605 28.816C96.3605 29.456 96.6058 29.968 97.0965 30.352C97.6085 30.7147 98.3018 30.896 99.1765 30.896C100.009 30.896 100.755 30.704 101.417 30.32C102.078 29.9147 102.558 29.328 102.857 28.56L103.625 30.864C103.262 31.9733 102.601 32.816 101.641 33.392C100.681 33.968 99.4432 34.256 97.9285 34.256Z"
              fill="#3B3B3B"
            />
          </svg>
          <div>
          {user ? (
                <div className="user-container">
              <img className="user-icon" src="./assets/person.svg" /> Hello, {user.name} {user.lastName}
                </div>
              ) : (<div></div>)}
          </div>
          </div>
        </div>
        {navComponentDisplay}
      </nav>
    </div>
  );
};

export default NavComponent;
