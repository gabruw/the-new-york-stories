//#region Imports

import { useRoute } from '@react-navigation/native';
import ModalNews from 'components/ModalNews';
import React, { useMemo } from 'react';
import TabsNavigator from 'routes/navigators/TabsNavigator';
import { SUB_ROUTES } from 'routes/routes';
import { TopStoriesContextProvider } from 'storages/top-stories/context';

//#endregion

const TopStories = () => {
    const route = useRoute();
    const subRoutes = useMemo(() => SUB_ROUTES[route.name], [route]);

    return (
        <TopStoriesContextProvider>
            <TabsNavigator routes={subRoutes} />
            <ModalNews />
        </TopStoriesContextProvider>
    );
};

export default TopStories;
