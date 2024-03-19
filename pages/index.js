import React, { useEffect, useRef } from 'react';
import Lottiehome1 from '../public/lottie/home_1.json';
import PageTopSection from '@/components/page-top-section/pageTopSection';
import AboutUsSec from '@/components/aboutUs/aboutUsSec';
import CountSect from '@/components/counter/countSect';
import OutTechnologies from '@/components/our-technologies/ourTechnologies';
import ClientFeedback from '@/components/client-feedback/client-feedback';

const index = () => {

  return (
    <>
      <div className="hme_container" id="home">
        <PageTopSection
          sort_des="Paving the way through disruptive technologies"
          title="Grow your business with"
          span="Codecade"
          desc="With a focus on efficiency and collaboration, we empower businesses to achieve their goals and surpass expectations. Whether you're a startup or an established enterprise, let Codecade be your partner in navigating the ever-evolving landscape of technology and project management."
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
            <p>Our team of dedicated professionals is committed to providing continuous support and services to ensure the success of every project. With a focus on efficiency and collaboration, we empower businesses to achieve their goals and surpass expectations.</p>
            <a href="#services" className='btn-1'>Learn more</a>
          </div>
        </div>

        <AboutUsSec />
        <CountSect />
        <OutTechnologies />
        <ClientFeedback />


      </div>
    </>
  )
}

export default index;