import React from 'react';

import './AboutUs.css';
import ilogo from "../../assets2/word india.png"
import namaste from "../../assets2/namaste hands 2.png"
import indiagate from "../../assets2/icons8-taj-mahal-64.png" 
import temple from "../../assets2/icons8-temple-58.png"


const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={ilogo} alt="India word" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={indiagate} alt="about_indiagate" className='indiagate__img' />
        <p className='p__opensans'>India: A land of diverse landscapes, rich history, vibrant culture, and warm hospitality. From the Himalayas to the backwaters, ancient temples to modern cities, it's a stunning fusion of tradition and modernity. Delightful cuisine, wildlife, and festivals add to its allure. A beautiful tapestry of colors, cultures, and experiences awaits.</p>
        <button type='button' className='custom__button' 
        onClick={() => {
          window.open("https://knowindia.india.gov.in/", "_blank");
        }}
        >Know More</button>
      </div>

      <div className="app__aboutus-content_namaste flex__center">
        <img src={namaste} alt="about_namaste" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={temple} alt="about_indiagate" className='indiagate__img' />
        <p className='p__opensans' style={{fontSize:"0.8rem"}}>From the tales of ancient civilizations like the Indus Valley to the rise and fall of majestic empires like the Maurya, Gupta, and Mughals. Its architectural wonders, from the iconic Taj Mahal to the mystical temples, showcase the genius of human creativity. Moreover, India's spiritual wisdom, passed down through saints and sages, adds a profound dimension to its cultural treasures, making it a truly extraordinary destination for seekers of knowledge and beauty.</p>
        <button type='button' className='custom__button'
        onClick={() => {
          window.open("https://knowindia.india.gov.in/photo-gallery/", "_blank");
        }}
        >Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
