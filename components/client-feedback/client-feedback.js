import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ClientFeedback = () => {
    return (
        <>
            <h1 className='client_feedback_h1'>Continuous Feedback and Mentoring <span>Inspired us</span> <br />
                To Do Someting Great Together</h1>
            <div className="client_feedback" id="portfolio">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="review_swiper review_swiper_bg">
                    <SwiperSlide>
                        <div className="client_review">
                            <div>
                                <div>As stated by</div>
                                <div>
                                    <h3>Agam Prakash</h3>
                                    <p>Co Founder, Codecade</p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    "We are invested in the work we do. And conisder our clients' growth as our own."</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    )
}

export default ClientFeedback;