import React, { useEffect, useRef } from 'react';
import Lottiehome1 from '../public/lottie/home_1.json';
import PageTopSection from '@/components/page-top-section/pageTopSection';
import AboutUsSec from '@/components/aboutUs/aboutUsSec';
import CountSect from '@/components/counter/countSect';

const index = () => {

  return (
    <>
      <div className="hme_container">
        <PageTopSection
          sort_des="Paving the way through disruptive technologies"
          title="Grow your business with"
          span="ZealtechBD"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, molestias eligendi eaque earum hic delectus assumenda sapiente saepe cupiditate dolore."
          button="Services We Provide"
          lottieFile={Lottiehome1}
        />

        <div className='home_ser_list'>
          <div className='home_ser_list_icon'>
            <div>
              <img src="icon/devlopment.png" alt="img" />
              <p>Web Development</p>
            </div>
            <div>
              <img src="icon/digital-marketing.png" alt="img" />
              <p>Digital Marketing</p>
            </div>
            <div>
              <img src="icon/graphics.png" alt="img" />
              <p>Graphics Design</p>
            </div>
            <div>
              <img src="icon/software.png" alt="img" />
              <p>POS Software</p>
            </div>
          </div>
          <div className="home_ser_content">
            <p>How can we help you?</p>
            <h1>You name it, We will do it</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quaerat deserunt recusandae at hic quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aspernatur dolorem reprehenderit temporibus corporis praesentium autem sapiente libero quia tempora?</p>
            <a href="#" className='btn-1'>Learn more</a>
          </div>
        </div>

        <AboutUsSec />
        <CountSect />





      </div>
    </>
  )
}

export default index;