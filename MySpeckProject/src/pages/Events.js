import React, { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { storeContext } from '../context/StoreContext';
import { getEvents } from '../api/events';
import { PageTitle } from '../lib/styles/GeneralStyles';

// Components
import SectionGrid from '../components/SectionGrid/SectionGrid';
import InfoBox from '../components/InfoBox/InfoBox';
import Loader from '../components/Loader/Loader';
import SearchBar from '../components/SearchBar/SearchBar';

// Images
import IconEvent from '../assets/img/event-icon.png';

const Events = () => {
    const store = useContext(storeContext);
    const [events, setEvents] = useState('');
    const [filteredEvents, setFilteredEvents] = useState('');

    useEffect(() => {
        if (store.events.length > 0) {
            setEvents(store.events);
            setFilteredEvents(store.events);
        } else {
            getEvents(localStorage.getItem('token')).then(({ events }) => {
                setEvents(events);
                setFilteredEvents(events);
                store.setEvents(events);
            })
        }
    }, []);

    const handleSearch = (value) => {
        const filteredResult = filteredEvents.filter(event => event.title.toLowerCase().includes(value.toLowerCase()));
        setEvents(filteredResult);
    }

    return (
        <>
            <PageTitle>Events</PageTitle>
            <SearchBar
                placeholder="Search events..."
                disabled={events ? false : true}
                onValueChange={handleSearch}
            />
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
            </SectionGrid>
        </>
    );
}

export default observer(Events);