import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, StyleSheet, LogBox } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

import firebase from 'firebase/app';
import firebaseConfig from './firebase';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();

import AuthStack from './src/navigation/AuthStack';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const theme = {
  colors: {
    primary: '#e63737',
  },
};

if (LogBox) {
  LogBox.ignoreLogs(['Setting a timer']);
  LogBox.ignoreLogs(['Require cycle']);
}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticated: !!user });
  };

  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <NavigationContainer>
            {this.state.isAuthenticated ? <DrawerNavigation /> : <AuthStack />}
          </NavigationContainer>
        </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
