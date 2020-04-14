import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { loginRequest, logoutRequest } from '../../redux/actions/Login';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { user } = this.state;
        if (user.username && user.password) {
            this.props.login(user);
        }
    }

    render() {
        const { user } = this.state;
        let { message } = this.props;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Login</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Login</button>
                                    <Link to="/register" className="btn btn-link">Cancel</Link>
                                </div>
                                <p>{ message ? message : "" }</p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login.user,
        loading: state.login.loading,
        message: state.login.message
    }
}

const bindActions = (dispatch) => {
    return {
        login: (user) => dispatch(loginRequest(user)),
        logout: () => dispatch(logoutRequest())
    }
}

const withConnect = connect(
    mapStateToProps,
    bindActions
)

export default withRouter(withConnect(RegisterPage));