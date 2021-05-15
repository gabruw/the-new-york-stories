//#region Imports

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ROUTES, { DEFAULT_ROUTE } from 'routes/routes';

//#endregion

const Drawer = createDrawerNavigator();

const AppRoutes = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName={DEFAULT_ROUTE}>
            {ROUTES.map(({ name, Component }, index) => (
                <Drawer.Screen key={index} name={name} component={Component} />
            ))}
        </Drawer.Navigator>
    </NavigationContainer>
);

export default AppRoutes;
