import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';
import welcome from "../../assets2/header.png"

const Header = () => (

  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Gate to a Whole New World"/>
 
      <h1 className='app__header-h1'>Witness Incredible India</h1>
      <p className='p__opensans' style={{ margin:'2rem 0'}}>India is one of the oldest civilizations in the world with a kaleidoscopic variety and rich cultural heritage. It has achieved all-round socio-economic progress since its Independence. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity. Bounded by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west.
      </p>
      <button type='button' className='custom__button'
      onClick={() => {
        window.open("https://www.incredibleindia.org/content/incredible-india-v2/en.html", "_blank");
      }}
      >Explore More</button>
    </div>

    <div className="app__wrapper_img">
      <img src={welcome} className='resize' alt="header img" />
    </div>
  </div>
);

export default Header;
