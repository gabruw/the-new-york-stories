//#region Imports

import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const HeaderBanner = () => {
    const styles = useStyles();

    return (
        <View style={styles.banner}>
            <Text style={styles.title}>The New York Stories</Text>
        </View>
    );
};

export default HeaderBanner;
