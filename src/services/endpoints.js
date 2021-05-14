//#region Imports

import { API_KEY } from '@env';

//#endregion

const ENDPOINTS = {
    BASE: `https://api.nytimes.com/svc/`,
    TOP_STORIES: {
        THIS: (type) => `topstories/v2/${type}.json?api-key=${API_KEY}`,
        HOME: THIS('home'),
        SCIENCE: THIS('science'),
        TECHNOLOGY: THIS('technology')
    }
};

export default ENDPOINTS;
