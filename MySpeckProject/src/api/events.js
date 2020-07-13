import apiOrigin from './api';

export const getEvents = (authToken) => {
    return fetch(`${apiOrigin}/events`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then(res => res.json());
}

export const postEvent = (authToken, eventData) => {
    return fetch(`${apiOrigin}/events`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData)
    }).then(res => res.json());
}