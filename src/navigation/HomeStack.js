import React, { Component } from 'react';

import QuizBtn from '../../components/QuizBtn';
import HomeScreen from '../../screens/HomeScreen';
import MaskScreen from '../../screens/MaskScreen';
import HandWashingScreen from '../../screens/HandWashingScreen';
import VaccineScreen from '../../screens/VaccineScreen';
import SocialDistanceScreen from '../../screens/SocialDistanceScreen';
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
          name="MaskScreen"
          component={MaskScreen}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="HandWashingScreen"
          component={HandWashingScreen}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="SocialDistanceScreen"
          component={SocialDistanceScreen}
          options={{ headerShown: true }}
        ></Stack.Screen>
        <Stack.Screen
          name="VaccineScreen"
          component={VaccineScreen}
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
