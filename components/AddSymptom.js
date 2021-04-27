import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricMetaInfo, timeToString } from '../utils/helpers';
import CustomSlider from './CustomSlider';
import DateHeader from './DateHeader';

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

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    // Update Redux

    this.setState(() => ({ run: 0, bike: 0, swim: 0, sleep: 0, eat: 0 }));

    // Navigate to home

    // Save to "DB"

    // Clear local notification
  };

  render() {
    const metaInfo = getMetricMetaInfo();

    return (
      <View>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider' ? (
                <CustomSlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <View>
                  <Text>No Component</Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    );
  }
}
