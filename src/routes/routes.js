//#region Imports

import HOME from 'views/top-stories/home';
import SCIENCE from 'views/top-stories/science';
import TECHNOLOGY from 'views/top-stories/technology';

//#endregion

const ROUTES = [
    {
        name: 'Home',
        Component: HOME
    },
    {
        name: 'Science',
        Component: SCIENCE
    },
    {
        name: 'Technology',
        Component: TECHNOLOGY
    }
];

export const DEFAULT_ROUTE = ROUTES[0].name;

export default ROUTES;
