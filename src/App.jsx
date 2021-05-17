//#region Imports

import AppSnackbar from 'containers/AppSnackbar';
import SplashLoader from 'containers/SplashLoader';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from 'routes';
import { SystemContextProvider } from 'storages/system/context';

//#endregion

const App = () => (
    <SafeAreaProvider>
        <SystemContextProvider>
            <SplashLoader>
                <Router />
                <AppSnackbar />
            </SplashLoader>
        </SystemContextProvider>
    </SafeAreaProvider>
);

export default App;
