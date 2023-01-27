import React from 'react';
import Lottie from 'lottie-react';

const pageTopSection = ({
    sort_des,
    title,
    span,
    desc,
    button,
    lottieFile
}) => {
    return (
        <>
            <div className="page_top_section">
                <div className="page_top_content">
                    <div className="page_top_title">
                        <p>{sort_des}</p>
                        <h1>{title}<br /> <span>{span}</span></h1>
                        <p className='page_top_des_p'>{desc}</p>
                        <a className='btn-1' href="#">{button}</a>
                    </div>
                    <div >
                        <Lottie className="page_lottie_1" loop={true} animationData={lottieFile} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default pageTopSection;