import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';
import CustomHeader from '../components/CustomHeader';
import History from '../components/History';
import AgendaComponent from '../components/AgendaComponent';
import { darkConflowerBlue } from '../constants/Colors';

export default function HeartScreen({ navigation }) {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{ flex: 1, paddingTop: 25 }}>
        <AgendaComponent />
      </View>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 50,
//     height: 50,
//   },
//   headerContainer: {
//     flex: 1,
//     padding: 34,
//   },
// });
