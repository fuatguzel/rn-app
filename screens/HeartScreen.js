import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View } from 'react-native';

import CustomHeader from '../components/CustomHeader';
import { darkConflowerBlue } from '../constants/Colors';

export default function HeartScreen({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <CustomHeader title="" isHome={true} navigation={navigation} />
      <View style={styles.container}>
        <Text>Heart Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flex: 1,
    padding: 34,
  },
});
