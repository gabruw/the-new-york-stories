//#region Imports

import TopStories from 'views/top-stories';
import TopStoriesHome from 'views/top-stories/home';
import TopStoriesScience from 'views/top-stories/science';
import TopStoriesTechnology from 'views/top-stories/technology';

//#endregion

export const ROUTE_NAMES = {
    TOP_STORIES: {
        HOME: 'TopStoriesHome',
        SCIENCE: 'TopStoriesScience',
        TECHNOLOGY: 'TopStoriesTechnology'
    }
};

export const MAIN_ROUTES = [
    {
        icon: 'thumbs-up',
        title: 'Top Stories',
        Component: TopStories,
        name: ROUTE_NAMES.TOP_STORIES.HOME
    }
];

export const SUB_ROUTES = {
    [ROUTE_NAMES.TOP_STORIES.HOME]: {
        ROUTES: {
            home: TopStoriesHome,
            science: TopStoriesScience,
            technology: TopStoriesTechnology
        },
        VIEWS: [
            { key: 'home', title: 'Início' },
            { key: 'science', title: 'Ciência' },
            { key: 'technology', title: 'Tecnologia' }
        ]
    }
};
