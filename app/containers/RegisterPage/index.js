import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { registerRequest } from '../../redux/actions/Register';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstname: '',
                lastname: '',
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
        if (user.firstname && user.lastname && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { user } = this.state;
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Register</h2>
                            <form name="form" onSubmit={this.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" className="form-control" name="firstname" value={user.firstname} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastname" value={user.lastname} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Register</button>
                                    <Link to="/login" className="btn btn-link">Cancel</Link>
                                </div>
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
        loading: state.register.loading,
        message: state.register.message
    }
}

const bindActions = (dispatch) => {
    return {
        register: (user) => dispatch(registerRequest(user))
    }
}

const withConnect = connect(
    mapStateToProps,
    bindActions
)

export default withRouter(withConnect(RegisterPage));