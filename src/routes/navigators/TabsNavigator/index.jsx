//#region Imports

import React, { useState } from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import useStyles from './styles';
import TabBarNavigator from './TabBarNavigator';

//#endregion

const TabsNavigator = ({ routes }) => {
    const styles = useStyles();

    const [tab, setTab] = useState(0);
    const [views] = useState(routes.VIEWS);

    return (
        <TabView
            onIndexChange={setTab}
            initialLayout={styles.layout}
            renderTabBar={TabBarNavigator}
            renderScene={SceneMap(routes.ROUTES)}
            navigationState={{ index: tab, routes: views }}
        />
    );
};

export default TabsNavigator;
