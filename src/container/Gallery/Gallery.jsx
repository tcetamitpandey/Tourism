import React from 'react';

import './Gallery.css';
import { SubHeading } from '../../components';
// Icons
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
// Importing images for gallery
import G1 from "../../assets2/Galley/1.webp"
import G2 from "../../assets2/Galley/11.jpg"
import G3 from "../../assets2/Galley/12.jpg"
import G5 from "../../assets2/Galley/2.webp"
import G6 from "../../assets2/Galley/3.webp"
import G7 from "../../assets2/Galley/4.webp"
import G8 from "../../assets2/Galley/5.webp" 
import G9 from "../../assets2/Galley/6.jpg"
import G10 from "../../assets2/Galley/7.webp"
import G11 from "../../assets2/Galley/8.webp"
import G12 from "../../assets2/Galley/9.jpg"



const images =[G1,G2,G3,G5,G6,G7,G8,G9,G10,G11,G12];

const Gallery = () => {
  const scrollRef =React.useRef(null);

  const scroll =(direction) => {
    const { current }=scrollRef;

    if(direction === 'left'){
      current.scrollLeft -=300;
    }else{
      current.scrollLeft +=300;
    } 
  }

 return (

    <div className='app__gallery flex__center' id='gallery'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Galley</h1>
        <p className="p__opnesans" style={{color: "#AAA",marginTop:"2rem"}}>The spirit of India manifests itself in its diverse lifestyle, lively festivals, vibrant costumes and rich traditions. It lives and expresses itself in every aspect of the life of its people.</p>
        <button type='button' className='custom__button'
        onClick={() => {
          window.open("https://knowindia.india.gov.in/photo-gallery/", "_blank");
        }}
        >View More</button>
      </div>
      <div className="app__gallery-images">

        <div className="app__gallery-images_container" ref={scrollRef }>
          {images.map((image,index) =>
            <div className="app__galley-images_card flex__center" key={`Gallery_image-${index +1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className='galley__image-icon'  
                onClick={() => {
                  window.open("https://www.instagram.com/pandey_ji_0fficial/", "_blank");
                }} />
             
            </div>
          )}
        </div>

        <div className='app__gallery-images_arrow'>
          <BsArrowLeftShort className='galley__arrow-icon' onClick={()=>scroll('left')} />
          <BsArrowRightShort className='galley__arrow-icon' onClick={()=>scroll('right')} />
        </div>
      </div>
    </div>
  );
}
export default Gallery;
