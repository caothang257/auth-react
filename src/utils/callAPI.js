import axios from 'axios';
import * as CONFIG from '../constants/CONFIG_API';

export default function callApi(method, endpoint, body) {
    return axios({
        method: method ? method : 'GET',
        url: `${CONFIG.URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};