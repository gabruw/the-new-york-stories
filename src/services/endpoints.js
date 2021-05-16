//#region Imports

import { API_KEY } from '@env';

//#endregion

const TYPES = {
    TOP_STORIES: (type) => `topstories/v2/${type}.json?api-key=${API_KEY}`
};

const ENDPOINTS = {
    BASE: `https://api.nytimes.com/svc/`,
    TOP_STORIES: {
        HOME: TYPES.TOP_STORIES('home'),
        SCIENCE: TYPES.TOP_STORIES('science'),
        TECHNOLOGY: TYPES.TOP_STORIES('technology')
    }
};

export default ENDPOINTS;
