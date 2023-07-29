import React,{useState} from 'react';
//importing icons 
import {GiHamburgerMenu} from "react-icons/gi"
import {MdOutlineRestaurantMenu} from "react-icons/md"
// import logo from "../../assets2/india-doodle.png"
import logo from "../../assets2/Real-logo.png"

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);

  return (
  <nav className='app__navbar'>
    <div className="app__navbar__logo">
      <img src={logo} alt="app logo" />
    </div>
    <ul className='app__navbar-link'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#testimonial">Message</a></li>
      <li className='p__opensans'><a href="#intro">Intro</a></li>
      <li className='p__opensans'><a href="#gallery">Gallery</a></li>
      <li className='p__opensans'><a href="#footer">contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className='p__opensans'
      onClick={() => {
        window.open("https://www.linkedin.com/in/amit-pandey-tcet/", "_blank");
      }}>Amit <span style={{color:"var(--color-golden)"}}>Pandey</span></a>
      <div/>
      <a href="/" className='p__opensans'
      onClick={() => {
        window.open("https://tcetamitpandey.github.io/Amit_Protfolio_V1/", "_blank");
      }}>React <span style={{color:"var(--color-golden)"}}>Project</span></a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>setToggleMenu(true) } />
      
      {/* Conditional Rendering */}
      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu(false)}/>
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href="#home">Home</a></li>
          <li className='p__opensans'><a href="#about">About</a></li>
          <li className='p__opensans'><a href="#trending">Trending</a></li>
          <li className='p__opensans'><a href="#food">Food</a></li>
          <li className='p__opensans'><a href="#contact">contact</a></li>
        </ul>
      </div>
      )}
    
    </div>
  </nav>
);
}
export default Navbar;
