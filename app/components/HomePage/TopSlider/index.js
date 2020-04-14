import React from "react";
import Swiper from "react-id-swiper";
import 'swiper/css/swiper.css';

import home_img from '../../../images/home.png';
import "./style.scss";

const sliderImages = [{ slider_image: home_img }, { slider_image: home_img }];

const topSlider = () => {
    let bannerParams = {
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'progressbar'
        },
        autoplay: false
    };
    
    return (
        <div className="top-slider">
            <Swiper {...bannerParams}>
                {sliderImages.map((data, index) => {
                    let {
                        slider_image,
                    } = data;
                    return (
                        <div className="container-fluid">
                            <div className="row content_center">
                                <div className="col-12 col-sm-6 col-md-7 p_0">
                                    <img src={home_img} className="img-fluid" />
                                </div>
                                    <div className="col-12 col-sm-6 col-md-4">
                                        <div className="slider_black_border">
                                            <div className="box_shadow_slider">
                                                <div className="slider_title">
                                                    RAJA FASHIONS
                                                </div>
                                                <div className="slider_title_2 margin_t_35">
                                                    TOP OF THE DRAWER COLLECTION
                                                </div>
                                                <div className="slider_title_3">
                                                    2020
                                                </div>
                                                <div className="margin_t_35">
                                                    <a href="" className="black_btn">
                                                        DISCOVER
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
            </Swiper>
        </div>
    )
};
        
export default topSlider;