import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { getMetricMetaInfo, timeToString } from '../utils/helpers';
import CustomSlider from './CustomSlider';
import DateHeader from './DateHeader';
import SubmitBtn from './SubmitBtn';
import { Ionicons } from '@expo/vector-icons';
import TextButton from './TextButton';
import { submitSymptom, removeSymptom } from '../utils/api';

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

    submitSymptom({ key, entry });

    // Clear local notification
  };

  reset = () => {
    const key = timeToString();

    // Update Redux

    // Route to Home

    removeSymptom(key);
  };

  render() {
    const metaInfo = getMetricMetaInfo();

    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons name={'ios-happy'} size={100} />
          <Text>You already logged your information for today.</Text>
          <TextButton onPress={this.reset}>Reset</TextButton>
        </View>
      );
    }

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
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}
