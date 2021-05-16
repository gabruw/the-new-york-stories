//#region Imports

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HeaderBanner from './HeaderBanner';
import useStyles from './styles';

//#endregion

const AppHeader = () => {
    const styles = useStyles();
    const { toggleDrawer } = useNavigation();

    return (
        <Header
            placement='left'
            centerComponent={<HeaderBanner />}
            leftContainerStyle={styles.content}
            centerContainerStyle={styles.content}
            leftComponent={<Icon name='bars' size={16} color='#FFFFFF' onPress={() => toggleDrawer()} />}
        />
    );
};

export default AppHeader;
