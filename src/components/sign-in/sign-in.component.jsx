import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: ''})
    }

    handelChanged = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handelSubmit}>
                    <input name="email" type="email" value={this.state.email} onChange={this.handelChanged} required/>
                    <label>Email</label>
                    <input name="password" type="password" value={this.state.password} onChange= {this.handelChanged} required/>
                    <label >Password</label>
                    <input type="submit" value='Submit form'/>
                </form>
            </div>
        )
    }
}

export default SignIn;