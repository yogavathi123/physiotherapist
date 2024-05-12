// import React, { useState, useEffect } from "react";
// import "./Header.css";
// import { CSSTransition } from "react-transition-group";
// import logo from "../images/logo1.png";
// import { FiAlignJustify } from "react-icons/fi";
// export default function Header() {
//   const [isNavVisible, setNavVisibility] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 700px)");
//     mediaQuery.addListener(handleMediaQueryChange);
//     handleMediaQueryChange(mediaQuery);

//     return () => {
//       mediaQuery.removeListener(handleMediaQueryChange);
//     };
//   }, []);

//   const handleMediaQueryChange = mediaQuery => {
//     if (mediaQuery.matches) {
//       setIsSmallScreen(true);
//     } else {
//       setIsSmallScreen(false);
//     }
//   };

//   const toggleNav = () => {
//     setNavVisibility(!isNavVisible);
//   };

//   return (
//     <div>
//     <header className="Header">
//         <div className="LogoContainer">
//             <img src={logo} className="Logo" alt="logo" />
//             <h3 className="Heading">PHYSIOTHERAPIST</h3>
//         </div>
        
//         <CSSTransition
//             in={!isSmallScreen || isNavVisible}
//             timeout={350}
//             classNames="NavAnimation"
//             unmountOnExit
//         >
//             <nav className="Nav">
//                 <a href="#scrollspyHeading1">Home</a>
//                 <a href="#scrollspyHeading2">Services</a>
//                 <a href="#scrollspyHeading3">About us</a>
//                 <a href="#scrollspyHeading4">Reviews</a>
//                 <a href="#scrollspyHeading5">Contact</a>
//             </nav>
//         </CSSTransition>
        
//         <button onClick={toggleNav} className="Burger">
//             ☰
//         </button>
//     </header>
// </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import logo from "../images/logo1.png";
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

  const handleNavLinkClick = () => {
    if (isSmallScreen) {
      setNavVisibility(false);
    }
  };

  return (
    <header className="Header">
      <div className="LogoContainer">
        <img src={logo} className="Logo" alt="logo" />
        <h3 className="Heading">PHYSIOTHERAPIST</h3>
      </div>
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="#scrollspyHeading1" onClick={handleNavLinkClick}>
            Home
          </a>
          <a href="#scrollspyHeading2" onClick={handleNavLinkClick}>
            Services
          </a>
          <a href="#scrollspyHeading3" onClick={handleNavLinkClick}>
            About us
          </a>
          <a href="#scrollspyHeading4" onClick={handleNavLinkClick}>
            Reviews
          </a>
          <a href="#scrollspyHeading5" onClick={handleNavLinkClick}>
            Contact
          </a>
        </nav>
      </CSSTransition>
      
      <button onClick={toggleNav} className="Burger">
        ☰
      </button>
    </header>
  );
}
