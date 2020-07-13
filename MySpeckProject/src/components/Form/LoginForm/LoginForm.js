import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../../api/login';
import { AuthContext } from '../../../context/AuthContext';

import Loader from '../../Loader/Loader';

import {
    Form,
    FormAdditionalLink,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const LoginForm = (props) => {
    const history = useHistory();
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [processRequest, setProcessRequest] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessRequest(true);

        try {
            const result = await loginUser(userData);

            if (result.token) {
                setSuccess(true);
                localStorage.setItem('token', result.token);
                //props.onAuthChange(true);
                setIsAuthenticated(true);

                setTimeout(() => {
                    history.push('/');
                }, 2500);
            } else {
                setProcessRequest(false);
                setSuccess(false);
                setErrorMessage('Username or password are incorrect!');
            }
        } catch (err) {
            console.log(err);
        }
    }

    const loginForm = <Form onSubmit={handleSubmit}>
        <FormRow>
            <FormAdditionalLink to="/register">You don't have an account? Click here to register!</FormAdditionalLink>
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
        </FormRow>
        <FormRow>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                required />
        </FormRow>
        <FormButtonRow>
            <FormButton>Login</FormButton>
        </FormButtonRow>
        {errorMessage && <FormGeneralError>{errorMessage}</FormGeneralError>}
    </Form>;

    return (
        <>
            {processRequest ? <Loader /> : loginForm}
            {success && <FormSubmitSuccess>Successfull login, soon you will be redirected to homepage!</FormSubmitSuccess>}
        </>
    );
}

export default LoginForm;