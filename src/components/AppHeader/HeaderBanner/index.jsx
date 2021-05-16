//#region Imports

import { useRoute } from '@react-navigation/native';
import Logo from 'components/Logo';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const HeaderBanner = () => {
    const route = useRoute();
    const styles = useStyles();

    return (
        <View style={styles.banner}>
            <Logo width={25} height={20} />
            <Text style={styles.title}>{route.name}</Text>
        </View>
    );
};

export default HeaderBanner;
