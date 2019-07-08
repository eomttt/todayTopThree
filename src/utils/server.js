
import * as api from './api';

export const getData = () => {
    return fetch(api.getData, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        }).then((response) => {
            return response.json();
        }).catch((error) => {
            console.log('Get data error', error);
        });
}