import React from 'react';

import { PageTitle } from '../lib/styles/GeneralStyles';
import RegisterForm from '../components/Form/RegisterForm/RegisterForm';

const Register = (props) => {
    return (
        <>
            <PageTitle>Registration</PageTitle>
            <RegisterForm />
        </>
    );
}

export default Register;