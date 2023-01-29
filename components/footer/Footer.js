import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const footer = () => {
  return (
    <>
      <div className='footer_sec'>
        <div className="footer">
          <div className=" footer_item ">
            <img src="Zealtechbd-logo.png" alt="img" />
            <p>ZealTechBD is a web design, Graphic design & digital marketing agency based company in Bangladesh. It has been providing services to the clients from 50+ countries around the world.</p>
            <div className='footer_icon'>
            <a href="#">
              <BsFacebook />
            </a>
            <a href="#">
              <BsInstagram />
            </a>
            <a href="#">
              <BsLinkedin />
            </a>
            <a href="#">
              <BsTwitter />
            </a>
            <a href="#">
              <BsYoutube />
            </a>
            </div>
          </div>
          <div className="footer_item footer_menu">
            <h3>Menu</h3>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Gallery</a>
            <a href="#">Career</a>
            <a href="#">Contact</a>
          </div>
          <div className="footer_item">
            <h3>Contact Us</h3>
            <p>Ka/32/5/A (2nd Floor), Palash Tower, Shahjadpur, Badda, Dhaka Division, Bangladesh.</p>
            <p>+88 01977749733</p>
            <p>info@zealtechbd.com</p>
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