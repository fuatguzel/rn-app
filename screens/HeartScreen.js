import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, Image, View } from 'react-native';

import CustomHeader from '../components/CustomHeader';
import { darkConflowerBlue } from '../constants/Colors';

export default function HeartScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomHeader title="" isHome={true} navigation={navigation} />
        <View style={styles.headerContainer}>
          <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>
            Welcome to HEARTSCREEN!
          </Text>
          <StatusBar style="auto" />
        </View>
        <View style={styles.headerContainer}>
          <Image
            style={styles.image}
            source={require('../src/assets/woman-with-mask.png')}
          />
          <StatusBar style="auto" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
  },
  image: {
    width: 50,
    height: 50,
  },
  headerContainer: {
    flex: 1,
    borderRadius: 34,
    width: 300,
    height: 400,
    backgroundColor: darkConflowerBlue,
    // padding: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
