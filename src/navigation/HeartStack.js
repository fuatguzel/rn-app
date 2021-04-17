import React, { Component } from 'react';

import HeartScreen from '../../screens/HeartScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export class SearchStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Heart">
        <Stack.Screen
          name="Heart"
          component={HeartScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  }
}

export default SearchStack;
