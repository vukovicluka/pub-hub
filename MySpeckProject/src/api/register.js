import apiOrigin from './api';

export const registerUser = (userData) => {
    return fetch(`${apiOrigin}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    }).then(res => res.json());
}