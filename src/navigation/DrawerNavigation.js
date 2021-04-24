import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../../screens/Profile';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function DraweNavigation() {
  return (
    <Drawer.Navigator
      drawerType="back"
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: 'white',
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}
