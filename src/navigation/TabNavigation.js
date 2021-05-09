import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import HeartStack from './HeartStack';
import CoronaStack from './CoronaStack';

import {
  darkConflowerBlueSecond,
  darkConflowerBlue,
  color4,
  color3,
} from '../../constants/Colors';

const Tab = createBottomTabNavigator();
export class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused;
              return (
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? darkConflowerBlue : 'gray'}
                />
              );
            } else if (route.name === 'Heart') {
              iconName = focused;
              return (
                <FontAwesome5
                  name="heart"
                  size={24}
                  color={focused ? darkConflowerBlue : 'gray'}
                />
              );
            } else if (route.name === 'Corona') {
              iconName = focused;
              return (
                <FontAwesome5
                  name="viruses"
                  size={24}
                  color={focused ? darkConflowerBlue : 'gray'}
                />
              );
            }

            return <View style={{ justifyContent: 'center' }}></View>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#141414',
          inactiveTintColor: '#fff',
          showLabel: true,
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#fff',
          //'#d1d7e0'
          // '#bb2124'
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Heart" component={HeartStack} />
        <Tab.Screen name="Corona" component={CoronaStack} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
