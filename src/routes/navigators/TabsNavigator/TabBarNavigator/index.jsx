//#region Imports

import React from 'react';
import { TabBar } from 'react-native-tab-view';
import useStyles from './styles';

//#endregion

const TabBarNavigator = (props) => {
    const styles = useStyles();

    return <TabBar {...props} indicatorStyle={styles.indicator} labelStyle={styles.title} style={styles.bar} />;
};

export default TabBarNavigator;
