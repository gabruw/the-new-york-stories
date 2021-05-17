//#region Imports

import ChomskyMedium from 'assets/fonts/Chomsky-Medium.ttf';
import GeomanistMedium from 'assets/fonts/Geomanist-Medium.ttf';
import GeomanistRegular from 'assets/fonts/Geomanist-Regular.ttf';
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
            'Geomanist-Medium': GeomanistMedium,
            'Geomanist-Regular': GeomanistRegular
        });
    }, []);

    useEffect(() => {
        (async () => {
            await fonts();
            setIsLoading(false);
        })();
    }, []);

    return <View style={styles.content}>{!isLoading ? children : <LoadingScreen />}</View>;
};

export default SplashLoader;
