import React, { Component } from 'react';

import QuizBtn from '../../components/QuizBtn';
import HomeScreen from '../../screens/HomeScreen';
import HomeDetail from '../../screens/HomeDetail';
import SymptomTest from '../../screens/SymptomTest';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
class HomeStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="HomeDetail"
          component={HomeDetail}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="SymptomTest"
          component={SymptomTest}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    );
  }
}

export default HomeStack;
