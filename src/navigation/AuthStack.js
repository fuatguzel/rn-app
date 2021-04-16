import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../../screens/auth/Login'

const Stack = createStackNavigator();

export class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="Login"
                headerMode={'none'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
            </Stack.Navigator >
        );
    }
}

export default AuthStack;
