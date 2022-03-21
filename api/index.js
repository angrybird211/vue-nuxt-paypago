import axios from 'axios';

const baseDonmain = 'https://backend-kimango.herokuapp.com/';

export const customHeader = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
};

export const baseUrl = `${ baseDonmain }`;
export const currentDemo = 2;

export default axios.create( {
    baseUrl,
    headers: customHeader
} )