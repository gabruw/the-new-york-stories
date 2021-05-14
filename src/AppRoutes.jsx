//#region Imports

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from 'routes';

//#endregion

const Stack = createStackNavigator();

const AppRoutes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            {ROUTES.map(({ name, Component }, index) => (
                <Stack.Screen key={index} name={name} component={Component} />
            ))}
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppRoutes;
