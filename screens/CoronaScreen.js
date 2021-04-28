import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import CustomHeader from '../components/CustomHeader';
import { darkConflowerBlue } from '../constants/Colors';

export default function CoronaScreen({ navigation }) {
  return (
    <View style={styles.headerContainer}>
      <CustomHeader title="" isHome={true} navigation={navigation} />
      <View style={styles.container}>
        <Text>Corona Datas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    padding: 34,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
