import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  Dimensions,
  ImageBackground,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import firebase from 'firebase';

import { darkConflowerBlue } from '../../constants/Colors';

const bgImage = require('../../src/assets/woman-with-mask.png');

export default function First() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>
        Welcome to LOGIN!
      </Text>
      <Image
        style={{ width: 60, height: 60, marginTop: 259 }}
        source={require('../../src/assets/google-icon.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkConflowerBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
