import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import logo from "../images/logo1.png";
import { FiAlignJustify } from "react-icons/fi";
export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div>
         <h1 style={{padding:'2rem',color:'grey'}}> PHYSIOTHERAPIST</h1>
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
       
        <nav className="Nav">
        <h3 className="heading1">PHYSIOTHERAPIST</h3>
            <a href="#scrollspyHeading1">Home</a>
          <a href="#scrollspyHeading2">Services</a>
          <a href="#scrollspyHeading3">About us</a>
          <a href="#scrollspyHeading4">Reviews</a>
          <a href="#scrollspyHeading5">Contact</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <FiAlignJustify />
      </button>
    </header>
    </div>
  );
}