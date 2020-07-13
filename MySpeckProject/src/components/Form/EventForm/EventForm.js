import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../../../context/StoreContext';
import { useHistory } from 'react-router-dom';
import { postEvent } from '../../../api/events';

import Loader from '../../Loader/Loader';

import {
    Form,
    FormGeneralError,
    FormRow,
    FormButtonRow,
    FormLabel,
    FormInput,
    FormSubmitSuccess,
    FormButton,
} from '../FormStyles';

const AddEvent = (props) => {
    const history = useHistory();
    const store = useContext(storeContext);
    const [eventData, setEventData] = useState({
        title: '',
        location: '',
        dateTime: '',
        about: '',
        link: '/',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [processRequest, setProcessRequest] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setEventData({
            ...eventData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessRequest(true);

        try {
            const postedEvent = await postEvent(localStorage.getItem('token'), eventData);

            if (postedEvent) {
                store.setEvent(postedEvent.event);
                setSuccess(true);
                setTimeout(() => {
                    history.push('/events');
                }, 2500);
            } else {
                setProcessRequest(false);
                setSuccess(false);
                setErrorMessage('Error submitting new post!');
            }
        } catch (err) {
            console.log(err);
        }
    }

    const addEvent =
        <Form onSubmit={handleSubmit}>
            <FormRow>
                <FormLabel htmlFor="title">Title</FormLabel>
                <FormInput
                    type="text"
                    id="title"
                    name="title"
                    value={eventData.title}
                    onChange={handleChange}
                    required />
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="location">Location</FormLabel>
                <FormInput
                    type="text"
                    id="location"
                    name="location"
                    value={eventData.location}
                    onChange={handleChange}
                    required />
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="dateTime">Date & time</FormLabel>
                <FormInput
                    type="text"
                    id="dateTime"
                    name="dateTime"
                    value={eventData.dateTime}
                    onChange={handleChange}
                    required />
            </FormRow>
            <FormRow>
                <FormLabel htmlFor="about">About</FormLabel>
                <FormInput
                    type="text"
                    id="about"
                    name="about"
                    value={eventData.about}
                    onChange={handleChange}
                    required />
            </FormRow>
            <FormButtonRow>
                <FormButton>Submit event</FormButton>
            </FormButtonRow>
            {errorMessage && <FormGeneralError>{errorMessage}</FormGeneralError>}
        </Form>;

    return (
        <>
            {processRequest ? <Loader /> : addEvent}
            {success && <FormSubmitSuccess>New event submitted successfully!</FormSubmitSuccess>}
        </>
    );
}

export default observer(AddEvent);