//#region Imports

import SCIENCE from 'views/home';
import HOME from 'views/science';
import TECHNOLOGY from 'views/technology';

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
