import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { color3, darkConflowerBlue } from '../constants/Colors';

import { showMessage, hideMessage } from 'react-native-flash-message';

export default function EmergencyBtn() {
  let name = 'Fuat';
  return (
    <TouchableOpacity
      style={styles.emergencyBtn}
      onPress={() => {
        showMessage({
          message: 'Emergency Call!',
          description: `Dear ${name}, your disease has been transmitted. We are coming. \n\n Stay Safe.`,
          type: 'info',
          backgroundColor: '#141414', // background color
          color: '#fff', // text color,
          duration: 3000,
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
          source={require('../src/assets/hospital_building-256.png')}
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
    borderColor: '#bb2124',
  },
  text: {
    color: '#fff',
  },
});
