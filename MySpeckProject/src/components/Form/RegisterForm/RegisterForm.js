import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../../api/register';

import Loader from '../../Loader/Loader';

import {
    Form,
    FormAdditionalLink,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormInputValidation,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const RegisterForm = (props) => {
    const history = useHistory();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const [usernameValidation, setUsernameValidation] = useState('');
    const [passwordValidation, setPasswordValidation] = useState('');
    const [processRequest, setProcessRequest] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    const handlePasswordValidation = (e) => {
        userData.password.length >= 8 && setPasswordValidation('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userData.password.length > 0 && userData.password.length > 0) {
            setProcessRequest(true);
        }

        try {
            const result = await registerUser(userData);

            if (result.error) {
                setProcessRequest(false);
                setPasswordValidation('Password should be at least 8 characters long');
                setUsernameValidation('');
            } else if (result.message) {
                setProcessRequest(false);
                setPasswordValidation('');
                setUsernameValidation('Username already exists');
            } else {
                setSuccess(true);
                setTimeout(() => {
                    history.push('/login');
                }, 2500);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const registerForm = <Form onSubmit={handleSubmit}>
        <FormRow>
            <FormAdditionalLink to="/login">Already registered? Click here to login!</FormAdditionalLink>
        </FormRow>
        <FormRow>
            <FormLabel htmlFor="username">Username</FormLabel>
            <FormInput
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                required />
            <FormInputValidation>{usernameValidation}</FormInputValidation>
        </FormRow>
        <FormRow>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                onBlur={handlePasswordValidation}
                required />
            <FormInputValidation>{passwordValidation}</FormInputValidation>
        </FormRow>
        <FormButtonRow>
            <FormButton>Register</FormButton>
        </FormButtonRow>
    </Form>;

    return (
        <>
            {processRequest ? <Loader /> : registerForm}
            {success && <FormSubmitSuccess>Successfull registration, soon you will be redirected to login!</FormSubmitSuccess>}
        </>
    );
}

export default RegisterForm;