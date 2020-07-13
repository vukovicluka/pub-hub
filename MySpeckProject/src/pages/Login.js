import React from 'react';

import { PageTitle } from '../lib/styles/GeneralStyles';
import LoginForm from '../components/Form/LoginForm/LoginForm';

const Login = (props) => {
    return (
        <>
            <PageTitle>Login</PageTitle>
            <LoginForm {...props} />
        </>
    );
}

export default Login;