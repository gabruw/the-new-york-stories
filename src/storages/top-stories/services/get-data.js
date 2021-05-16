//#region Imports

import api from 'services/api';
import ENDPOINTS from 'services/endpoints';

//#endregion

export const getHome = () => api.get(ENDPOINTS.TOP_STORIES.HOME);
export const getScience = () => api.get(ENDPOINTS.TOP_STORIES.SCIENCE);
export const getTechnology = () => api.get(ENDPOINTS.TOP_STORIES.TECHNOLOGY);
