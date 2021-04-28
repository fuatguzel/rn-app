import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import HeartStack from './HeartStack';

import { darkConflowerBlueSecond } from '../../constants/Colors';

const Tab = createBottomTabNavigator();
export class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../assets/icons/base-home.png')
                : require('../assets/icons/home-twotone.png');
            } else if (route.name === 'Heart') {
              iconName = focused
                ? require('../assets/icons/favorite.png')
                : require('../assets/icons/favorite-twotone.png');
            }

            return (
              <View style={{ justifyContent: 'center' }}>
                <Image
                  source={iconName}
                  style={{
                    width: 20,
                    height: 20,
                    justifyContent: 'center',
                    color: 'red',
                  }}
                  resizeMode="contain"
                />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: darkConflowerBlueSecond,
          showLabel: false,
          activeBackgroundColor: darkConflowerBlueSecond,
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Heart" component={HeartStack} />
        <Tab.Screen name="Corona" component={HomeStack} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
