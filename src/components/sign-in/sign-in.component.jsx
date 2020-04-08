import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;

        try {
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({email: '', password: ''});  
        } catch (error) {
            console.log('error', error.message);
        }

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
                    <FormInput name="email" type="email" label="Email" value={this.state.email} handelChange={this.handelChanged} required/>
                    <FormInput name="password" type="password" label="Password" value={this.state.password} handelChange= {this.handelChanged} required/>
                        <div className='buttons'>
                            <CustomButton type="submit"> Sign in </CustomButton>
                            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
                            Sign in with google
                            </CustomButton>
                        </div> 
                </form> 
            </div>
        )
    }
}

export default SignIn;