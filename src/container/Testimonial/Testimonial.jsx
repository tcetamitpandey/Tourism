import React from 'react'
import "./Testimonial.css"

import PM from "../../assets2/PM Mdoi.jpg"
import Qote from "../../assets2/quote.png"
import Sign from "../../assets2/Pmsign2.png"

import { SubHeading } from '../../components'

const Testimonial = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='testimonial'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={PM} alt="PM" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="PM's Word's"/>
        <h1 className='headtext__cormorant'>What We Belive In</h1>

        <div className="app__PM-content">
          <div className="app__PM-content_quote">
            <img src={Qote} alt="quote" />
            <p className="p__opensans">Vasudhaiva Kutumbakam ("The World Is One Family")</p>
          </div>
          <p className="p__opensans" style={{fontSize:"0.7rem"}}>Dear Travelers from Around the World,
            Namaste! We extend a heartfelt invitation to experience the enchanting beauty and cultural richness of India. From the majestic landscapes to the vibrant festivals, every moment promises to be an unforgettable adventure. Come, explore our diverse heritage, taste the flavors of our cuisines, and immerse yourself in the warmth of our hospitality. We eagerly await your presence in our incredible nation! Jai Hind!
          </p>
        </div>
        <div className="app__PM-sign">
          <p>Shri Narendra Modi</p>
          <p className='p__opensans'>Prime Minister of India</p>
          <img src={Sign} alt="Sign" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial