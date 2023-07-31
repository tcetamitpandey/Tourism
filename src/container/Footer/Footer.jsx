import React from 'react';

import './Footer.css';

import {GiEarthAsiaOceania} from "react-icons/gi"
import {IoIosContact} from "react-icons/io"
import {AiOutlineCode} from "react-icons/ai"
import {BsFire} from "react-icons/bs"

// Site Logo
import logo from "../../assets2/india.png"
import lotus from "../../assets2/lotus.png"


const Footer = () => (
   <div className="app__footer section__padding" id='footer'>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext' style={{color:"#dfbd00"}}>Contact Us</h1>
        {/* <a href=""></a> */}
        <p className="p__opensans" style={{display:"none"}}>pandeyJiDevelopers@gmail.com</p>
        <a href="mailto:pandeyJiDevelopers@gmail.com" className='p__opensans mailme'>Click Here</a>
      </div>
      <div className="app__footer-links_logo">
        <img src={logo} alt="logo" />
        <p  className="p__opensans" style={{marginTop:"0.1rem"}}>Come visit us</p>
        <img src={lotus} alt="lotus" className='lotus__img' style={{marginTop : 10}} />
        <div className="app__footer-links_icons">
          <a href="https://www.incredibleindia.org/" target='_blank' ><GiEarthAsiaOceania /></a>
          <a href="https://tcetamitpandey.github.io/Amit_Protfolio_V1/" target='_blank' ><AiOutlineCode /> </a>
          <a href="https://www.linkedin.com/in/amit-pandey-tcet/" target='_blank' ><IoIosContact /></a>
        </div>
      </div>

      <div className="app__footer-links_real">
      <h1 className='app__footer-headtext' style={{color:"#dfbd00"}}>Official Site</h1>
        <a href="https://www.incredibleindia.org/" target='_blank' className='visitTo'>incredible india</a>
        <p className="p__opensans"></p>
      </div>
    </div>
    <div className="footer__copyright">
      <pre className='p__opensans flex__center'>Made with <BsFire/> By Amit Pandey</pre>
    </div>
   </div>
);

export default Footer;
