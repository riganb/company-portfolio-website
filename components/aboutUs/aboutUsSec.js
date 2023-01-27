import React from 'react';
import Lottie from 'lottie-react';
import LottieAboutSec from '../../public/lottie/about-us.json';

const aboutUsSec = () => {
  return (
    <>
      <div className='about_sec'>
        <div className='about_sec_content'>
          <p>About Company</p>
          <h1>We believe, one idea begets others, but one great idea stays stronger above all.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ea rem dicta provident neque, quia error illum quam adipisci maiores beatae, ab ipsa? Vitae porro dicta nihil! Sit odio, nostrum, libero perspiciatis deleniti, consequatur mollitia aliquam exercitationem ea ipsam nulla.</p>
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