import React from 'react';
import shop_img from '../../../images/shop.png'

const outStores = () => {
    return (
        <div className="container">
            <div className="row content_center p_t_100">
                <div className="col-12 margin_b_35">
                    <div className="page_title_2">
                        OUR STORES
                    </div>
                    <div className="section_heading_underline"></div>
                    <div className="desp_content_2 margin_t_35">
                        Visit one of our flagship stores and enjoy an elegant and calming atmosphere in which to begin your Raja experience. Each exquisite store is stocked with the world’s finest cloth and serviced by our experts in fit & fabric.
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="margin_t_35 shop_over">
                        <a href="" className="">
                            <img src={shop_img} className="img-fluid" />
                            <div className="margin_t_35 p_15">
                                <div className="desp_content_2">
                                    <strong>AUSTRALIA</strong>
                                </div>
                                <div className="desp_content_2 margin_t_35">
                                    Tel:+61 394297617
                                </div>
                                <div className="desp_content_2">
                                    Email:info@thesuitconcierge.com
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="margin_t_35 shop_over">
                        <a href="" className="">
                            <img src={shop_img} className="img-fluid" />
                            <div className="margin_t_35 p_15">
                                <div className="desp_content_2">
                                    <strong>HONGKONG</strong>
                                </div>
                                <div className="desp_content_2 margin_t_35">
                                    Tel:+852 23667624
                                </div>
                                <div className="desp_content_2">
                                    Email:raja@raja-fashions.com
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="margin_t_35 shop_over selected">
                        <a href="" className="">
                            <img src={shop_img} className="img-fluid" />
                            <div className="margin_t_35 p_15">
                                <div className="desp_content_2">
                                    <strong>SINGAPORE</strong>
                                </div>
                                <div className="desp_content_2 margin_t_35">
                                    Tel:+65 62030777
                                </div>
                                <div className="desp_content_2">
                                    Email:raja@raja-fashions.com
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
                
export default outStores;
