import React, { useState, useEffect } from 'react';
import { getEvents } from '../api/events';
import { getSpeakers } from '../api/speakers';
import { PageTitle } from '../lib/styles/GeneralStyles';

// Components
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/Loader/Loader';

// Images
import IconEvent from '../assets/img/event-icon.png';
import IconSpeaker from "../assets/img/speakers-icon.png";

const Events = () => {
    const [events, setEvents] = useState('');
    const [speakers, setSpeakers] = useState('');

    useEffect(() => {
        getDataOneByOnePromises();
        // getDataOneByOneAwait();
        // getDataParallel();
    }, []);

    const getDataOneByOnePromises = async () => {
        getEvents(localStorage.getItem('token'))
            .then(respEvents => {
                console.log('Fetched events:', respEvents.events);
                setEvents(respEvents.events);
            })
            .then(() => {
                getSpeakers(localStorage.getItem('token'))
                    .then(respSpeakers => {
                        console.log('Fetched speakers:', respSpeakers.speakers);
                        setSpeakers(respSpeakers.speakers);
                    })
            });
    }

    const getDataOneByOneAwait = async () => {
        const fetchedEvents = await getEvents(localStorage.getItem('token'));
        console.log('Events fetched!', fetchedEvents.events);
        setEvents(fetchedEvents.events);

        const fetchedSpeakers = await getSpeakers(localStorage.getItem('token'));
        console.log('Speakers fetched!', fetchedSpeakers.speakers);
        setSpeakers(fetchedSpeakers.speakers);
    }

    const getDataParallel = () => {
        const fetchedEvents = getEvents(localStorage.getItem('token'));
        const fetchedSpeakers = getSpeakers(localStorage.getItem('token'));

        Promise.all([fetchedEvents, fetchedSpeakers]).then(data => {
            console.log('All data fetched:', data);
            data.map(item => {
                if (item.events) {
                    console.log('Fetched events:', item.events);
                    setEvents(item.events);
                } else {
                    console.log('Fetched speakers:', item.speakers);
                    setSpeakers(item.speakers);
                }
            })
        });
    }

    return (
        <>
            <PageTitle>Events & Speakers</PageTitle>
            <SectionGrid>
                {events ? (
                    events.map(event => (
                        <InfoBox
                            key={event._id}
                            icon={IconEvent}
                            title={event.title}
                            location={event.location}
                            dateTime={event.dateTime}
                            about={event.about}
                            btnText="Register for the event"
                        />)
                    )
                ) : (<Loader />)
                }
                {speakers ? (
                    speakers.map((speaker) => (
                        <InfoBox
                            key={speaker._id}
                            icon={IconSpeaker}
                            title={speaker.title}
                            about={speaker.about}
                            btnText="Follow speaker"
                            typeSpeakers
                        />
                    ))
                ) : (
                        <Loader />
                    )}
            </SectionGrid>
        </>
    );
}

export default Events;