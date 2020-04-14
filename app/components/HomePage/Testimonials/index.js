import React from 'react';
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css';

import home_img from '../../../images/without-box.png';
import "./style.scss";
const sliderImages = [{ slider_image: home_img }, { slider_image: home_img }];

const testimonials = () => {
    let bannerParams = {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction'
        },
        autoplay: false
    };
    return (
        <div className="testimonials container">
            <Swiper {...bannerParams}>
                {sliderImages.map((data, index) => {
                    return (
                            <div className="container-fluid">
                                <div className="row content_center p_t_100">
                                    <div className="col-12 col-sm-6 col-md-5">
                                        <div>
                                            <div className="page_title_2">
                                                TESTIMONIALS
                                            </div>
                                            <div className="section_heading_underline">
                                            </div>
                                            <div className="page_title_3 margin_t_25">
                                                What people feel about Raja
                                            </div>
                                            <div className="desp_content_2 margin_t_35">
                                                "I am no millionaire, nor am I crazy enough to think I even look like one, but no matter: in my new 'Raja' suit, I get to feel like one".
                                            </div>
                                            <div className="desp_content_2 margin_t_35">
                                                Paul Gould
                                            </div>
                                            <div className="desp_content_2 margin_b_100">
                                                <strong>Financial times</strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-2"></div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <img src={home_img} className="img-fluid" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-1"></div>
                                </div>
                            </div>

                    )
                })}
            </Swiper>
        </div>
    )
}

export default testimonials;
