import React from 'react';

import ReactTab from '../../Common/Tabs';
import 'react-tabs/style/react-tabs.css';
import './style.scss'

const trunkShow = () => {
    return (
        <div className="trunkshow">
            <div className="container">
                <div className="row content_center p_t_100">
                    <div className="col-12 col-sm-12 col-md-12">
                        <div className="page_title_2">
                            TRUNK SHOW SCHEDULES
                        </div>
                        <div className="section_heading_underline"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <div className="page_desc">
                            Visit one of our venues for the real bespoke clothing experience. Book an appointment and you will be informed prior the date.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ReactTab />
            </div>
        </div>
    )
}

export default trunkShow;