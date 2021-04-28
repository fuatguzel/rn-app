import React from 'react';
import { Text } from 'react-native';
import { darkConflowerBlue } from '../constants/Colors';

export default function DateHeader({ date }) {
  return <Text style={{ color: darkConflowerBlue, fontSize: 20 }}>{date}</Text>;
}
