//#region Imports

import ChomskyMedium from 'assets/fonts/Chomsky-Medium.ttf';
import GeomanistBold from 'assets/fonts/Geomanist-Bold.ttf';
import GeomanistLight from 'assets/fonts/Geomanist-Light.ttf';
import GeomanistMedium from 'assets/fonts/Geomanist-Medium.ttf';
import GeomanistThin from 'assets/fonts/Geomanist-Thin.ttf';
import LoadingScreen from 'containers/SplashLoader/LoadingScreen';
import * as Font from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import useStyles from './styles';

//#endregion

const SplashLoader = ({ children }) => {
    const styles = useStyles();
    const [isLoading, setIsLoading] = useState(true);

    const fonts = useCallback(async () => {
        await Font.loadAsync({
            'Chomsky-Medium': ChomskyMedium,
            'Geomanist-Thin': GeomanistThin,
            'Geomanist-Bold': GeomanistBold,
            'Geomanist-Light': GeomanistLight,
            'Geomanist-Medium': GeomanistMedium
        });
    }, []);

    useEffect(() => {
        fonts();
        setIsLoading(false);
    }, []);

    return <View style={styles.content}>{!isLoading ? children : <LoadingScreen />}</View>;
};

export default SplashLoader;
