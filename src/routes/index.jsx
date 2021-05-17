//#region Imports

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from 'routes/navigators/DrawerNavigator';

//#endregion

const Router = () => (
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
);

export default Router;
