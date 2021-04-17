import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../../screens/auth/Login'
import Register from '../../screens/auth/Register'

const Stack = createStackNavigator();

export class AuthStack extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="Register"
                headerMode={'none'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                />
            </Stack.Navigator >
        );
    }
}

export default AuthStack;
