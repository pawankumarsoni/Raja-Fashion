import React from 'react';

const appointmentTabFifth = () => {
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
                    Choose a date & month
                    <div className="section_heading_underline"></div>
                </div>
                <div className="section_heading_2">
                    CHOOSE A MONTH
                </div>
                <div className="middle_2 row">
                    <label className="col-6 col-sm-4 col-md-4 col-lg-3">
                        <input type="radio" name="radio" />
                        <div className="front-end box">
                            <p className="title fw-700">JANUARY</p>
                            <p className="sub_title">64 slots available</p>
                        </div>
                    </label>
                    <label className="col-6 col-sm-4 col-md-4 col-lg-3">
                        <input type="radio" name="radio" />
                        <div className="front-end box">
                            <p className="title fw-700">MARCH</p>
                            <p className="sub_title">32 slots available</p>
                        </div>
                    </label>
                    <label className="col-6 col-sm-4 col-md-4 col-lg-3">
                        <input type="radio" name="radio" />
                        <div className="front-end box">
                            <p className="title fw-700">MAY</p>
                            <p className="sub_title">34 slots available</p>
                        </div>
                    </label>
                    <label className="col-6 col-sm-4 col-md-4 col-lg-3">
                        <input type="radio" name="radio" />
                        <div className="front-end box">
                            <p className="title fw-700">DECEMBER</p>
                            <p className="sub_title">12 slots available</p>
                        </div>
                    </label>
                </div>
                <div className="section_heading_2">
                    CHOOSE A DATE
                </div>
                <div className="middle_2 row">
                    <label className="col-6 col-sm-4 col-md-4 col-lg-3">
                        <input type="radio" name="date" />
                        <div className="front-end box">
                            <p className="title fw-700">Monday, 06 JAN</p>
                            <p className="sub_title"><i className="far fa-calendar-alt m_r_10"></i>18 slots available</p>
                        </div>
                    </label>
                    <label className="col-6 col-sm-4 col-md-4 col-lg-3">
                        <input type="radio" name="date" />
                        <div className="front-end box">
                            <p className="title fw-700">Monday, 07 JAN</p>
                            <p className="sub_title"><i className="far fa-calendar-alt m_r_10"></i>12 slots available</p>
                        </div>
                    </label>
                    <label className="col-6 col-sm-4 col-md-4 col-lg-3">
                        <input type="radio" name="date" />
                        <div className="front-end box">
                            <p className="title fw-700">Monday, 08 JAN</p>
                            <p className="sub_title"><i className="far fa-calendar-alt m_r_10"></i>32 slots available</p>
                        </div>
                    </label>
                </div>
                <div className="section_heading">
                    Choose a slot for booking
                    <div className="section_heading_underline"></div>
                </div>
                <div className="row content_center gold_border">
                    <div className="col-12 col-sm-1 col-md-1 col-lg-1">
                        <i className="far fa-cloud font_32 sub_title xs-margin-tb-20 d-none d-sm-block"></i>
                    </div>
                    <div className="col-12 col-sm-3 col-md-2 col-lg-2">
                        <div className="sub_title xs_sub_title"><i className="far fa-cloud font_32 sub_title m_r_10 d-block d-sm-none"></i>Morning</div>
                    </div>
                    <div className="col-12 col-sm-7 col-md-9 col-lg-9">
                        <div className="middle_2 xs-content-center row">
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">10:00 AM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">10:30 AM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">11:00 AM</p>
                                </div>
                            </label>

                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">11:30 AM</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row content_center gold_border">
                    <div className="col-12 col-sm-1  col-md-1  col-lg-1">
                        <i className="far fa-sun font_32 sub_title xs-margin-tb-20 d-none d-sm-block"></i>
                    </div>
                    <div className="col-12 col-sm-3 col-md-2 col-lg-2">
                        <div className="sub_title xs_sub_title"><i className="far fa-sun font_32 sub_title m_r_10 d-block d-sm-none"></i>Afternoon</div>
                    </div>
                    <div className="col-12 col-sm-7 col-md-9 col-lg-9">
                        <div className="middle_2 xs-content-center row">
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">12:00 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time"  checked="checked" />
                                <div className="front-end box">
                                    <p className="sub_title">12:30 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">01:00 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">01:30 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">02:30 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">03:30 PM</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row content_center gold_border">
                    <div className="col-12 col-sm-1 col-md-1 col-lg-1">
                        <i className="far fa-moon font_32 sub_title xs-margin-tb-20 d-none d-sm-block"></i>
                    </div>
                    <div className="col-12 col-sm-3 col-md-2 col-lg-2">
                        <div className="sub_title xs_sub_title"><i className="far fa-moon font_32 sub_title m_r_10 d-block d-sm-none"></i>Evening</div>
                    </div>
                    <div className="col-12 col-sm-7 col-md-9 col-lg-9">
                        <div className="middle_2 xs-content-center row">
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">04:00 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">04:00 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">05:00 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">05:30 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">06:00 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">06:30 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">07:00 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">07:30 PM</p>
                                </div>
                            </label>
                            <label className="col-6 col-md-4 col-lg-2">
                                <input type="checkbox" name="time" />
                                <div className="front-end box">
                                    <p className="sub_title">08:00 PM</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default appointmentTabFifth