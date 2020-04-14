import React from 'react';

const appointmentTabFourth = () => {
    return (
        <>
            <div className="tab">
                <div className="section_heading d-none d-sm-block">
                    Appointment Confirmed
                    <div className="section_heading_underline"></div>
                </div>
                <div className="box_shadow d-none d-sm-block">
                    <div className="row content_center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="display-table">
                                <div className="vertical-middle  p_l_50">
                                    <div className="selected_country last_step"></div>
                                    <div className="title fw_700 margin_tb_5">
                                        <i className="fas fa-map-marker-alt m_r_10 color_gold"></i>BERLIN, GERMANY
                                    </div>
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
                        <div className="col-12 col-sm-12 col-md-6 col-lg-8">
                            <div className="row">
                                <div className="col-12 col-sm-1 col-md-12 col-lg-2"></div>
                                <div className="col-12 col-sm-11 col-md-10">
                                    <div className=" display-table">
                                        <div className="vertical-middle">
                                            <div className="appointment_confirmed">
                                                <i className="fas fa-check"></i>
                                            </div>
                                            <div className="location_address margin_t_35 fw_700">
                                                Hey Jake,
                                            </div>
                                            <div className="location_address margin_tb_5">
                                                Your appointment has been confirmed. 
                                            </div>
                                            <div className="location_address margin_t_35">
                                                THE RITZ-CARLTON
                                            </div>
                                            <div className="location_address margin_tb_5">
                                                POSTDAMER PLATZ 3, 10785
                                            </div>
                                            <div className="location_address margin_tb_5 fw_700">
                                                BERLIN, GERMANY
                                            </div>
                                            <div className="margin_t_35 margin_b_10 small_text">
                                                Please check your email for room details and further communication
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default appointmentTabFourth;