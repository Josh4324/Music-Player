import React from 'react';
import {FormWrapper,InputWrapper, ButtonWrapper} from "../style/";

export const Login = () => {
    return (
        <FormWrapper>
            <h3 style={{ textAlign:"center" }}>Login</h3>
            <InputWrapper type="email" placeholder="Email" />
            <InputWrapper type="password" placeholder="Password" />
            <ButtonWrapper>SignUp</ButtonWrapper>
        </FormWrapper>
    );
}

