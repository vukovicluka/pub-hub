import apiOrigin from './api';

export const loginUser = (userData) => {
    return fetch(`${apiOrigin}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    }).then(res => res.json());
}