import React, {Component} from 'react';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

import * as S from './sign-in.styles'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (e) {
            console.log(e);
        }
    };

    handleChange = e => {
        const {value, name} = e.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <S.Container className='sign-in'>
                <S.Title>I already have an account</S.Title>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label='email'
                        handleChange={this.handleChange}
                        name='email'
                        value={this.state.email}
                        type="email"
                        required/>

                    <FormInput
                        label='password'
                        handleChange={this.handleChange}
                        name='password'
                        value={this.state.password}
                        type="password"
                        required/>

                    <S.ButtonsContainer className='buttons'>
                        <CustomButton type="submit" value='Submit Form'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn value='Submit Form'>
                            Sign in With Google
                        </CustomButton>
                    </S.ButtonsContainer>
                </form>

            </S.Container>
        )
    }
}


export default SignIn;