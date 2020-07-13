import React from 'react';
import { PageTitle } from '../lib/styles/GeneralStyles';
import EventForm from '../components/Form/EventForm/EventForm';

const AddEvent = () => {
    return (
        <>
            <PageTitle>Add Event</PageTitle>
            <EventForm />
        </>
    );
}

export default AddEvent;