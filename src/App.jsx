//#region Imports

import AppSnackbar from 'containers/AppSnackbar';
import SplashLoader from 'containers/SplashLoader';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from 'routes';
import { SystemContextProvider } from 'storages/system/context';
import THEME from 'utils/constants/theme';

//#endregion

const App = () => (
    <SafeAreaProvider>
        <ThemeProvider theme={THEME}>
            <SystemContextProvider>
                <SplashLoader>
                    <Router />
                    <AppSnackbar />
                </SplashLoader>
            </SystemContextProvider>
        </ThemeProvider>
    </SafeAreaProvider>
);

export default App;
