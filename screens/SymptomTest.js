import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import AddSymptom from '../components/AddSymptom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import { darkConflowerBlue } from '../constants/Colors';

export default function SymptomTest({ navigation }) {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ marginTop: 25, backgroundColor: '#fff' }}>
        <CustomHeader title="Symptoms" isHome={false} navigation={navigation} />
      </View>
      <View style={{ flex: 1 }}>
        <AddSymptom />
      </View>
    </Provider>
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
