//#region Imports

import api from 'services/api';
import ENDPOINTS from 'services/endpoints';

//#endregion

export const getTopStories = () => api.get(ENDPOINTS.TOP_STORIES.TECHNOLOGY);
