import React, { Component } from 'react';
import { View } from 'react-native';
import { getMetricMetaInfo } from '../utils/helpers';

export default class AddSymptom extends Component {
  state = {
    temperature: 0,
    cough: 0,
    dizziness: 0,
    tired: 0,
    appetite: 0,
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }));
  };
  render() {
    return <View></View>;
  }
}
