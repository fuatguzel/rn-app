import React, { Component } from 'react';
import { View } from 'react-native';
import { getMetricMetaInfo } from '../utils/helpers';

export default class AddSymptom extends Component {
  render() {
    return <View>{getMetricMetaInfo('bike').getIcon}</View>;
  }
}
