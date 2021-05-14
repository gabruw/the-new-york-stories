//#region Imports

import { API_KEY } from '@env';

//#endregion

const ENDPOINTS = {
    BASE: 'https://api.nytimes.com/svc/topstories/v2',
    SCIENCE: {
        TOP_STORIES: `/science.json?api-key=${API_KEY}`
    },
    TECHNOLOGY: {
        TOP_STORIES: `/technology.json?api-key=${API_KEY}`
    }
};

export default ENDPOINTS;
