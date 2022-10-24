import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const w = window.innerWidth;

  return (
    <header>
      <nav>
        <div>
          <a href="/" id="head">
            <img src="../logo.png" id="logo" />
            <p>JSilva Massagem</p>
          </a>
        </div>

        <div
          id="nav-list"
          style={navbarOpen && w < 900 ? { display: "flex" } : {}}
        >
          <HashLink to="/#hero" onClick={handleToggle}>
            Inicio
          </HashLink>
          <HashLink to="/#about" onClick={handleToggle}>
            Sobre
          </HashLink>
          <NavLink to="/services" onClick={handleToggle}>
            Serviços
          </NavLink>
          <HashLink to="/#contacts" onClick={handleToggle}>
            Contactos
          </HashLink>
        </div>

        <div className="ham" onClick={handleToggle}>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
