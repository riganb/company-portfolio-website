import React from 'react';
import Lottie from 'lottie-react';
import LottieAboutSec from '../../public/lottie/about-us.json';

const aboutUsSec = () => {
  return (
    <>
      <div className='about_sec' id="about">
        <div className='about_sec_content'>
          <p>About Company</p>
          <h1>We believe, one idea begets others, but one great idea stays stronger above all.</h1>
          <p>At Codecade, we pride ourselves on delivering innovative solutions that streamline project management for organizations of all sizes. Our team of dedicated professionals is committed to providing continuous support and services to ensure the success of every project.</p>
          <ul>
            <li>
              <img src="gif/giphy.gif" alt="gif" />
              <span>Web Development</span>
            </li>
            <li>
              <img src="gif/giphy.gif" alt="gif" />
              <span>Digital Marketing</span>
            </li>
            <li>
              <img src="gif/giphy.gif" alt="gif" />
              <span>Graphics Design</span>
            </li>
            <li>
              <img src="gif/giphy.gif" alt="gif" />
              <span>POS Software</span>
            </li>
          </ul>
        </div>
        <div>
          <Lottie loop={true} animationData={LottieAboutSec} />
        </div>
      </div>
    </>
  )
}

export default aboutUsSec;