import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { CgAwards } from 'react-icons/cg';

const countSect = () => {
  const [counterOn, setCounterOn] = useState()



  return (
    <div className='count_sec'>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
        <div className="count_up">
          <div className="count_up_content">
            <HiOutlineEmojiHappy className="count_up_icon" />
            <h1>{counterOn && <CountUp start={0} end={150} duration={3} delay={0} />} +</h1>
            <p>Happy Clients</p>
          </div>
          <div className="count_up_content">
            <AiOutlineFundProjectionScreen className="count_up_icon" />
            <h1>{counterOn && <CountUp start={0} end={200} duration={3} delay={0} />} +</h1>
            <p>Project Completed</p>
          </div>
          <div className="count_up_content">
            <BiTimeFive className="count_up_icon" />
            <h1>{counterOn && <CountUp start={0} end={3} duration={1} delay={0} />} +</h1>
            <p>Years of experience</p>
          </div>
          <div className="count_up_content">
            <CgAwards className="count_up_icon" />
            <h1>{counterOn && <CountUp start={0} end={10} duration={2} delay={0} />} +</h1>
            <p>Awards</p>
          </div>
        </div>
      </ScrollTrigger>


    </div>
  )
}

export default countSect;