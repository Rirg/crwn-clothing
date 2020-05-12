import React from "react";

import * as S from './sign-in-and-sign-up.styles'
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";


const SignInAndSignUpPage = () => (
    <S.Container>
        <SignIn/>
        <SignUp/>
    </S.Container>
);

export default SignInAndSignUpPage;