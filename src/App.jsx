//#region Imports

import SplashLoader from 'containers/SplashLoader';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRoutes from 'routes/AppRoutes';
import THEME from 'utils/constants/theme';

//#endregion

const App = () => (
    <SafeAreaProvider>
        <ThemeProvider theme={THEME}>
            <SplashLoader>
                <AppRoutes />
            </SplashLoader>
        </ThemeProvider>
    </SafeAreaProvider>
);

export default App;
