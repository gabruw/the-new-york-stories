//#region Imports

import COLOR from 'assets/styles/color';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import useStyles from './styles';

//#endregion

const { DARK } = COLOR.RED;

const AppLoader = ({ children, isLoading }) => {
    const styles = useStyles();

    return !isLoading ? (
        children
    ) : (
        <View style={styles.container}>
            <ActivityIndicator size='large' color={DARK} />
        </View>
    );
};

export default AppLoader;
