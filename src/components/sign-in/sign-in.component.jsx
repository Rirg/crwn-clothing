import React, {Component} from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {signInWithGoogle} from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: ''

        });
    };

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label='email' handleChange={this.handleChange} name='email' value={this.state.email}
                               type="email" required/>
                    <FormInput label='password' handleChange={this.handleChange} name='password'
                               value={this.state.password} type="password" required/>

                    <div className='buttons'>
                        <CustomButton type="submit" value='Submit Form'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn value='Submit Form'>
                            Sign in With Google
                        </CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}


export default SignIn;