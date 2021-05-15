//#region Imports

import StartAppLoader from 'containers/StartAppLoader';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import AppRoutes from 'routes/AppRoutes';
import THEME from 'utils/constants/theme';

//#endregion

const App = () => (
    <ThemeProvider theme={THEME}>
        <StartAppLoader>
            <AppRoutes />
        </StartAppLoader>
    </ThemeProvider>
);

export default App;
