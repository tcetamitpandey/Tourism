import React from 'react';

import { AboutUs, Footer, Gallery, Header, Intro } from './container';
import { Navbar } from './components';
import './App.css';
import Testimonial from './container/Testimonial/Testimonial';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Testimonial />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;
