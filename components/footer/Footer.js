import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const footer = () => {
  return (
    <>
      <div className='footer_sec' id="contact">
        <div className="footer">
          <div className=" footer_item ">
            <img src="Zealtechbd-logo.png" alt="img" />
            <p>Codecade is a web design, Graphic design & digital marketing agency based company in India. It has been providing services to its clients from 50+ cities across India.</p>
          </div>
          <div className="footer_item footer_menu">
            <h3>Menu</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer_item">
            <h3>Contact Us</h3>
            <p>Durgapur, West Bengal, India</p>
            <p>+91 7557042937</p>
            <p>careers.codecade@gmail.com</p>
          </div>
          <div className="footer_item footer_sub_sec">
            <h3>Subscribe to our newsletter</h3>
            <input type="text" placeholder='Enter Email' />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default footer