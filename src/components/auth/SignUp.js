import React from 'react';
import {FormWrapper,InputWrapper, ButtonWrapper} from "../style/";

export const SignUp = () => {
    return (
        <div>
            <FormWrapper>
                <h3 style={{ textAlign:"center" }}>SignUp</h3>
                <InputWrapper type="text" placeholder="First Name" />
                <InputWrapper type="text" placeholder="Last Name" />
                <InputWrapper type="email" placeholder="Email" />
                <InputWrapper type="password" placeholder="Password" />
                <InputWrapper type="password" placeholder="Confirm Password" />
                <ButtonWrapper>SignUp</ButtonWrapper>
            </FormWrapper>
        </div>
    );
}


