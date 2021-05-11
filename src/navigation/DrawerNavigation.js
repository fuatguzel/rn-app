import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../../screens/Profile';
import SettingsScreen from '../../screens/SettingsScreen';
import TabNavigation from './TabNavigation';
import { Entypo, Ionicons } from '@expo/vector-icons';
import {
  color1,
  color3,
  color4,
  darkConflowerBlueSecond,
  darkyellow,
} from '../../constants/Colors';

const Drawer = createDrawerNavigator();

export default function DraweNavigation() {
  return (
    <Drawer.Navigator
      drawerType="back"
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#d3d5fd',
        color: '#fff',
      }}
      drawerContentOptions={{
        activeTintColor: '#fff',
        itemStyle: { marginVertical: 20, marginLeft: 50 },
        labelStyle: {
          marginTop: 15,
          backgroundColor: '#a287f4',
          fontSize: 18,
          color: 'green',
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigation}
        options={{
          drawerIcon: () => {
            <Entypo name="home" size={24} color="black" />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          drawerIcon: () => {
            <Ionicons name="md-person" size={24} color="black" />;
          },
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: true,
          drawerIcon: () => {
            //<Ionicons name="md-person" size={24} color="black" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
