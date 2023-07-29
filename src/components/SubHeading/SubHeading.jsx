import React from 'react';

import namaste from "../../assets2/lotus.png"

// import {GiIndiaGate} from "react-icons/gi"

const SubHeading = ({title}) => (
  <div style={{marginBottom:"1rem"}}>
    <p className='p__cormorant'>{title}</p> {/* Font Name */}

    <img src={namaste} style={{width:'4rem'}} alt="namaste" className='lotus__img' />
  </div>
);

export default SubHeading;
