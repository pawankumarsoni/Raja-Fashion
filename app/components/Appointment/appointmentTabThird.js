import React from 'react';

const appointmentTabThird = () => {
    return (
        <>
            <div className="tab">
                <div className="section_heading d-none d-sm-block">
                    Appointment Information
                    <div className="section_heading_underline"></div>
                </div>
                <div className="box_shadow d-none d-sm-block">
                    <div className="row content_center">
                        <div className="col-12 col-sm-1 col-md-5 col-lg-4">
                            <div className=" display-table">
                                <div className="vertical-middle">
                                    <div className="selected_country"></div>
                                    <div className="title fw_700 p_l_50 lh_48">
                                        <i className="fas fa-map-marker-alt m_r_10 color_gold"></i> BERLIN, GERMANY
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-1 col-md-7 col-lg-8">
                            <div className="row">
                                <div className="col-12 col-sm-1 col-md-12 col-lg-2"></div>
                                <div className="col-12 col-sm-1 col-md-6 col-lg-4">
                                    <div className=" display-table">
                                        <div className="vertical-middle">
                                            <div className="location_address margin_tb_5">
                                                THE RITZ-CARLTON
                                            </div>
                                            <div className="location_address margin_tb_5">
                                                POSTDAMER PLATZ 3, 10785
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-1 col-md-6 col-lg-6">
                                    <div className=" display-table">
                                        <div className="vertical-middle">
                                            <div className="time_date">
                                                <i className="far fa-clock m_r_10 color_gold"></i>12:00 PM
                                            </div>
                                            <div className="content_center baseline_t_10">
                                                <div>
                                                    <i className="far fa-calendar-alt m_r_10 color_gold"></i>
                                                </div>
                                                <div className="">
                                                    <div className="week_day">
                                                        MONDAY
                                                    </div>
                                                    <div className="date_time">
                                                        06 JAN 2020
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_heading">
                    Enter customer details
                    <div className="section_heading_underline"></div>
                </div>
                <div>
                    <div className="row">
                        <div className="margin_t_35 col-12 col-sm-6">
                            <input type="text" className="form-control" placeholder="First Name" name=""/>
                        </div>
                        <div className="margin_t_35 col-12 col-sm-6">
                            <input type="text" className="form-control" placeholder="Last Name" name=""/>
                        </div>
                        <div className="margin_t_35 col-12 col-sm-6">
                            <input type="text" className="form-control" placeholder="Mobile Number" name=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="margin_t_35 col-12 col-sm-6">
                            <input type="text" className="form-control" placeholder="E-mail Address" name=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="margin_t_35 col-12 col-sm-6">
                            I’m booking appointment for
                        </div>
                    </div>
                    <div className="circular_radio">
                        <label>
                            <input type="radio" name="radio" />
                            <div className="circular_box min_w_150">
                                <p className="sub_title_2">New order</p>
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="radio" />
                            <div className="circular_box min_w_150">
                                <p className="sub_title_2">Complete a basted fitting</p>
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="radio" />
                            <div className="circular_box min_w_150">
                                <p className="sub_title_2">Alteration towards existing order</p>
                            </div>
                        </label>
                    </div>
                    <div className="row">
                        <div className="margin_t_35 col-12 col-sm-6">
                            Give me a reminder call one day prior
                        </div>
                    </div>
                    <div className="circular_radio">
                        <label>
                            <input type="radio" name="radio_2" />
                            <div className="circular_box">
                                <p className="sub_title_2">Yes</p>
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="radio_2" />
                            <div className="circular_box">
                                <p className="sub_title_2">No</p>
                            </div>
                        </label>
                    </div>
                    <div className="row">
                        <div className="margin_t_35 col-12">
                            <input type="text" name="" className="form-control" placeholder="Leave us a comment"/>
                        </div>
                        <div className="col-12 margin_tb_5">
                            <div className="instruction_text">*Please make sure your e-mail is correct for hassel free communication.</div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export  default appointmentTabThird;