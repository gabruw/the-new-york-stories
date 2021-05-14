//#region Imports

import ERROR from 'views/error';
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
    },
    {
        name: 'Error',
        Component: ERROR
    }
];

export default ROUTES;
