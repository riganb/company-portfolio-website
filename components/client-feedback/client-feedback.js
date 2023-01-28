import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const ClientFeedback = () => {
    return (
        <>
            <h1 className='client_feedback_h1'>Client Feedback <span>Inspired us</span> <br />
                To Do Someting Great Together</h1>
            <div className="client_feedback">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="review_swiper review_swiper_bg">
                    <SwiperSlide>
                        <div className="client_review">
                            <div>
                                <img className='client_img' src="client-feedback/caparkapa.jpg" alt="img" />
                                <div>
                                    <h3>Peter Castle, UK</h3>
                                    <p>MD of Company</p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    "I have brought two of their scripts before problem-free. I look forward to using this multivendor vue PWA. I know they provide support, unlike other developers who sell a support-less script."</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    )
}

export default ClientFeedback;