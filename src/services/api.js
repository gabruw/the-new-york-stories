//#region Imports

import axios from 'axios';
import ENDPOINTS from './endpoints';

//#endregion

const api = axios.create({
    baseURL: ENDPOINTS.BASE
});

export default api;
