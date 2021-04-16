import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../../screens/HomeScreen'

const Drawer = createDrawerNavigator();

export default function DraweNavigation() {
    return (
        <Drawer.Navigator initialRouteName="HomeScreen"
            drawerStyle={{
                backgroundColor: 'white'
            }}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        </Drawer.Navigator >
    );
}