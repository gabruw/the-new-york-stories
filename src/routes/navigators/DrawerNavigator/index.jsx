//#region Imports

import { createDrawerNavigator } from '@react-navigation/drawer';
import AppHeader from 'components/AppHeader';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MAIN_ROUTES, ROUTE_NAMES } from 'routes/routes';

//#endregion

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator
        initialRouteName={ROUTE_NAMES.TOP_STORIES.HOME}
        screenOptions={{
            headerShown: true,
            header: () => <AppHeader />
        }}
    >
        {MAIN_ROUTES.map(({ name, title, icon, Component }, mainIndex) => (
            <Drawer.Screen
                name={name}
                key={mainIndex}
                component={Component}
                options={{
                    title,
                    drawerIcon: () => <Icon name={icon} size={18} color='#000000' />
                }}
            />
        ))}
    </Drawer.Navigator>
);

export default DrawerNavigator;
