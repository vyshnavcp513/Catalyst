import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">1st Floor,Konjath Tower,Valiyakunnu</p>
        <p className="p__opensans">Valanchery,Malappuram,Kerala</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 09:00 pm</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 09:00 pm</p>
      </div>
      <a href='https://goo.gl/maps/8Vva49XHcs1ATWMQ7' target="_blank" rel="noopener noreferrer">
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
