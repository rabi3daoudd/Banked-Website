import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
} from './SignUpElements';
import Signup from './Signup';

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Banked</Icon>
                    <Signup />
                </FormWrap>
            </Container>
        </>
    );
};

export default SignUp;
