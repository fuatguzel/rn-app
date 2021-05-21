import { StatusBar } from 'expo-status-bar';
import CustomHeader from '../components/CustomHeader';
import firebase, { auth } from 'firebase/app';

import { color3, color4, darkConflowerBlue } from '../constants/Colors';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
//import SwitchWithIcons from 'react-native-switch-with-icons';

export default function Profile({ navigation }) {
  handleLogout = () => {
    firebase.auth().signOut();
  };

  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={require('../src/assets/avatar.png')}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{false ? user.name : 'Fuat Güzel'}</Text>
          <Text style={styles.info}>Covid - Posifive</Text>
          {/* <Text style={styles.description}>Description</Text> */}

          {/* <SwitchWithIcons
            style={{
              width: 150,
              height: 150,
            }}
            onValueChange={(value) =>
              console.log(`Value has been updated to ${value}`)
            }
          /> */}

          {/* <Button
            icon={{
              uri:
                'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400',
            }}
          >
            Press me
          </Button> */}

          <TouchableOpacity
            style={[styles.buttonContainer, { width: 100 }]}
            onPress={() => handleLogout()}
          >
            <Text style={styles.btnText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: color4,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 25,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: color3,
  },
  btnText: {
    color: '#fff',
  },
});
