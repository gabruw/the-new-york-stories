//#region Imports

import ChomskyMedium from 'assets/fonts/Chomsky-Medium.ttf';
import GeomanistBold from 'assets/fonts/Geomanist-Bold.ttf';
import GeomanistLight from 'assets/fonts/Geomanist-Light.ttf';
import GeomanistMedium from 'assets/fonts/Geomanist-Medium.ttf';
import GeomanistThin from 'assets/fonts/Geomanist-Thin.ttf';
import useGlobalStyles from 'assets/styles/global';
import AppLoader from 'components/AppLoader';
import * as Font from 'expo-font';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

//#endregion

const StartAppLoader = ({ children }) => {
    const styles = useGlobalStyles();
    const [isLoading, setIsLoading] = useState(true);

    const fetch = useCallback(async () => {
        await Font.loadAsync({
            'Chomsky-Medium': ChomskyMedium,
            'Geomanist-Thin': GeomanistThin,
            'Geomanist-Bold': GeomanistBold,
            'Geomanist-Light': GeomanistLight,
            'Geomanist-Medium': GeomanistMedium
        });

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetch();
    }, []);

    return <View style={styles.view}>{!isLoading ? children : <AppLoader />}</View>;
};

export default StartAppLoader;
