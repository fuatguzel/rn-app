import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { color3, color4, darkConflowerBlue } from '../constants/Colors';

import { showMessage, hideMessage } from 'react-native-flash-message';

const postUserInfos = () => {
  fetch('http://192.168.0.105:3000/events', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: '15',
      identificationNumber: '1111',
      name: 'fuat',
      surname: 'guzel',
      location: 'kocaeli/körfez',
    }),
  })
    .then(() => {
      console.log('DATA SEND');
    })
    .catch((error) => {
      console.error(error);
    });
};

export default function EmergencyBtn() {
  let name = 'Fuat';
  return (
    <TouchableOpacity
      style={styles.emergencyBtn}
      onPress={() => {
        console.log('Acil cagri yapildi');
        postUserInfos();
        showMessage({
          message: '\nEmergency Call!',
          description: `Dear ${name}, your situation has been transmitted. \n\n Stay Safe.`,
          type: 'info',
          marginTop: 50,
          backgroundColor: darkConflowerBlue, // background color #141414
          color: '#fff', // text color,
          duration: 4000,
        });
      }}
      // title="Request Details"
      // color="#841584"
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          paddingTop: 10,
        }}
      >
        <Text style={{ fontSize: 22 }}>S . </Text>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: 'contain',
          }}
          source={require('../src/assets/plus-buyuk.png')}
        />
        <Text style={{ fontSize: 22 }}> . S</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkConflowerBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 75,
    //mat siyah
    //backgroundColor: '#141414',#8C0303
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#141414',
  },
  text: {
    color: '#fff',
  },
});
