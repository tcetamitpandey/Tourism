import React,{useState, useRef} from 'react';
import {BsFillPlayFill, BsPauseFill} from "react-icons/bs";
import vdo from "../../assets2/MYIndia.mp4"

import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef=useRef();

  const handleVideo =()=>{
    setPlayVideo((prevPlayVideo)=> !prevPlayVideo)
    if(playVideo){
      vidRef.current.pause();
    }
    else{
      vidRef.current.play();
      let vid = document.getElementById("myVideo");
      vid.volume = 0.3;
    }
  }

  

  return(
  <div className='app__video' id='intro'>
    <video 
      src={vdo}
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
      id='myVideo'
      
      // muted
    />
    <div className="app__video-overlay flex__center">
      <div className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
      >
        { playVideo ? (<BsPauseFill color='#fff' fontSize={30}/>) : (<BsFillPlayFill color='#fff' fontSize={30}/>)}
      </div>
    </div>
  </div> 
)};

export default Intro;
