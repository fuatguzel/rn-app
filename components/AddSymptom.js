import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  getMetricMetaInfo,
  timeToString,
  getDailyReminderValue,
} from '../utils/helpers';
import CustomSlider from './CustomSlider';
import DateHeader from './DateHeader';
import SubmitBtn from './SubmitBtn';
import { Ionicons } from '@expo/vector-icons';
import TextButton from './TextButton';
import { submitSymptom, removeSymptom } from '../utils/api';
import { connect } from 'react-redux';
import { addSymptom } from '../actions';
import { darkConflowerBlue } from '../constants/Colors';

class AddSymptom extends Component {
  state = {
    temperature: 0,
    cough: 0,
    dizziness: 0,
    brethe: 0,
    vomiting: 0,
    tired: 0,
    appetite: 0,
    symptoms: [
      'temperature',
      'cough',
      'dizziness',
      'brethe',
      'vomiting',
      'tired',
      'appetite',
    ],
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value,
    }));
  };

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    this.props.dispatch(
      addSymptom({
        [key]: entry,
      }),
    );

    this.setState(() => ({
      temperature: 0,
      cough: 0,
      dizziness: 0,
      brethe: 0,
      vomiting: 0,
      tired: 0,
      appetite: 0,
    }));

    // Navigate to home

    submitSymptom({ key, entry });

    // Clear local notification
  };

  reset = () => {
    const key = timeToString();

    this.props.dispatch(
      addSymptom({
        [key]: getDailyReminderValue(),
      }),
    );

    // Route to Home

    removeSymptom(key);
  };

  render() {
    const metaInfo = getMetricMetaInfo();

    if (this.props.alreadyLogged) {
      return (
        <View style={styles.center}>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-happy' : 'md-happy'}
            style={{ color: darkConflowerBlue }}
            size={100}
          />
          <Text>You already logged your information for today.</Text>
          <TextButton style={{ padding: 10 }} onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];

          return (
            <View key={key} style={styles.row}>
              {getIcon()}
              <Text>
                deneme
                {/* {this.symptoms.forEach((element) => {
                  element;
                })} */}
              </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
});

function mapStateToProps(state) {
  const key = timeToString();

  return {
    alreadyLogged: state[key] && typeof state[key].today === 'undefined',
  };
}

export default connect(mapStateToProps)(AddSymptom);
