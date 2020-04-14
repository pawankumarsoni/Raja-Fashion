import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './Messages';
import { logoutRequest } from '../../redux/actions/Login';
import TopSlider from '../../components/HomePage/TopSlider';
import AboutUs from '../../components/HomePage/AboutUs';
import TrunkShow from '../../components/HomePage/TrunkShow';
import Testimonials from '../../components/HomePage/Testimonials';
import OutStores from '../../components/HomePage/OutStores';

class HomePage extends React.Component {
    
    state = {
        show_logout: false
    }

    componentDidMount(){
        if(window.localStorage.getItem("jwt")){
            this.setState({show_logout: true})
        }
    }

    logout = () => {
        this.props.logOut();
        this.setState({show_logout: false});
    }

    render(){
        let {show_logout} = this.state;
        return(
            <>
                <Helmet>
                    <title>Home page</title>
                    <meta
                    name="description"
                    content="A React.js Boilerplate application homepage"
                    />
                </Helmet>
                <h2>
                    <FormattedMessage {...messages.startProjectHeader} />
                </h2>
                <div>Test the saga</div>
                { show_logout ? <button onClick={()=>this.logout()}> Logout </button> : '' }
                <TopSlider />
                <TrunkShow />
                <AboutUs />
                <OutStores />
                <Testimonials />
            </>
        )
    }
}

const bindActions = (dispatch) => {
    return {
        logOut : () => dispatch(logoutRequest())
    }
}

const withConnect =  connect(
    null,
    bindActions
)

export default withRouter(withConnect(HomePage));
