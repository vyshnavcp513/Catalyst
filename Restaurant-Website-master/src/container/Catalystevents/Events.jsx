import React from 'react';
// import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// import { FooterOverlay, Newsletter } from '../../components';
// import { images } from '../../constants';
// import './Footer.css';

const Events = () => (
//   <div >
//     <h1>Comming Soon.....</h1>
//     <h2>Catalyst Events</h2>
//   </div>
<div className="app__bg ">
    <div >
    <h1 className="headtext__cormorant" style={{ marginBottom: '3rem', marginRight: '3rem' }}>Comming Soon..</h1>
      <h2 className="headtext__cormorant" style={{
        marginLeft: 'rem',
        marginRight: '5rem'
      }} >Catalyst Events</h2>
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.findus} alt="finus_img" /> */}
    </div>
  </div>
  
);

export default Events;
