import apiOrigin from './api';

export const getSpeakers = (authToken) => {
    return fetch(`${apiOrigin}/speakers`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    }).then(res => res.json());
}