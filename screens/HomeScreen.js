import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';

import { darkConflowerBlue } from '../constants/Colors';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomHeader title="" isHome={true} navigation={navigation} />
        <View style={styles.headerContainer}>
          <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>
            Welcome to HOMESCREEN!
          </Text>
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
  headerContainer: {
    flex: 1,
    backgroundColor: darkConflowerBlue,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
