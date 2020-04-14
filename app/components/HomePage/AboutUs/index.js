import React from 'react';

import home_dress from '../../../images/homepage-3.png';
import about_us from '../../../images/homepage-2.png';
import './style.scss';

const aboutUs = () => {
   return (
       <>
            <div  id="content"  className="container">
                <div className="row content_center p_t_100">
                    <div className="col-12 col-sm-6 col-md-5">
                        <div className="dress-dive">
                            <div className="page_title_2">
                                DRESS FOR THE DIVA IN YOU
                            </div>
                            <div className="section_heading_underline"></div>
                            <div className="desp_content_2 margin_t_35">
                                For a polished and elegant working wardrobe that will help you exude confidence and className, personalise your female suits, blouses, jackets, dresses, skirts, and trousers.
                            </div>
                        </div>
                        {/* <div className="dress-border">
                        </div> */}
                    </div>
                    <div className="col-12 col-sm-6 col-md-7">
                        <img src={about_us} className="img-fluid home-dress" />
                    </div>
                </div>
                <div className="row content_center p_t_100">
                    <div className="col-12 col-sm-6 col-md-6">
                        <div className="page_title_2">
                            ABOUT US
                        </div>
                        <div className="section_heading_underline"></div>
                        <div className="page_title_3 color_gold">
                            A tradition of excellence
                        </div>
                        <div className="desp_content_2 margin_t_35">
                            We are Hong Kong's leading bespoke tailors with a firm commitment to family values, exceptional quality, and exquisite fabrics. 
                        </div>
                        <div className="desp_content_2 margin_t_35 margin_l_35">
                            Since 1957 - for three generations - we have set out to provide our sartorially inclined and discerning clientele with elegant transformational bespoke masterpieces in which make them better versions of themselves. 
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                        <img  src={home_dress} className="img-fluid pt-15 img-home" />
                    </div>
                </div>
            </div>
       </>
   ) 
}

export default aboutUs;