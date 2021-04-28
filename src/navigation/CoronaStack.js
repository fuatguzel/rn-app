import React, { Component } from 'react';

import CoronaScreen from '../../screens/CoronaScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export class CoronaStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Heart">
        <Stack.Screen
          name="Heart"
          component={CoronaScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  }
}

export default CoronaStack;
