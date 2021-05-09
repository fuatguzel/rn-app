import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { darkConflowerBlue } from '../constants/Colors';

export default function QuizBtn({ nav }) {
  return (
    <TouchableOpacity
      style={styles.quizBtn}
      onPress={() => nav.navigate('SymptomTest')}
    >
      <Text style={styles.text}>How are you feeling today ? Let's Test !</Text>
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
  quizBtn: {
    justifyContent: 'center',
    width: 340,
    height: 50,
    //backgroundColor: '#e9ecf3',
    // borderRadius: 34,
    // borderWidth: 2,
    borderColor: darkConflowerBlue,
  },
  text: {
    textDecorationLine: 'underline',
    color: darkConflowerBlue,
    fontSize: 18,
  },
});
