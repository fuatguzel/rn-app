import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeDetail from '../../screens/HomeDetail';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function DraweNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: 'white',
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="HomeDetail" component={HomeDetail} />
    </Drawer.Navigator>
  );
}
