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
import { color3, color4, darkConflowerBlue } from '../constants/Colors';
import { MaterialIcons, Octicons, Feather } from '@expo/vector-icons';

class AddSymptom extends Component {
  state = {
    temperature: 0,
    cough: 0,
    dizziness: 0,
    brethe: 0,
    vomiting: 0,
    tired: 0,
    appetite: 0,
    temp_temperature: 0,
    temp_cough: 0,
    temp_dizziness: 0,
    temp_brethe: 0,
    temp_vomiting: 0,
    temp_tired: 0,
    temp_appetite: 0,
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
    const myState = this.state;
    let deneme = 7;
    if (this.props.alreadyLogged) {
      if (deneme == 0) {
        return (
          <View style={styles.center}>
            <Ionicons name="happy" size={100} color={color4} />
            <Text style={{ marginTop: 10, color: '#81c784' }}>
              You seems PERFECKT.
            </Text>
            <Text style={{ textAlign: 'center', marginHorizontal: 25 }}>
              You did it!
            </Text>
            <TextButton style={{ padding: 10 }} onPress={this.reset}>
              Reset
            </TextButton>
          </View>
        );
      } else if (deneme > 7) {
        return (
          <View style={styles.center}>
            <MaterialIcons name="sick" size={100} color={color4} />
            <Text style={{ marginTop: 10, color: '#CA0B00' }}>
              You seems like bad.
            </Text>
            <Text style={{ textAlign: 'center', marginHorizontal: 25 }}>
              If symptoms persist, be sure to press the S.O.S button.
            </Text>
            <TextButton style={{ padding: 10 }} onPress={this.reset}>
              Reset
            </TextButton>
          </View>
        );
      } else if (deneme > 0 && deneme < 5) {
        return (
          <View style={styles.center}>
            <Octicons name="thumbsup" size={100} color={color4} />
            <Text
              style={{
                marginTop: 10,
                color: '#F0D500',
              }}
            >
              You seems OK.
            </Text>
            <Text style={{ textAlign: 'center', marginHorizontal: 25 }}>
              Everything will be fine!
            </Text>
            <TextButton style={{ padding: 10 }} onPress={this.reset}>
              Reset
            </TextButton>
          </View>
        );
      } else {
        return (
          <View style={styles.center}>
            <Feather name="save" style={{ color: color4 }} size={100} />
            <Text style={{ marginTop: 10 }}>
              You already logged your information for today.
            </Text>
            <TextButton style={{ padding: 10 }} onPress={this.reset}>
              Reset
            </TextButton>
          </View>
        );
      }
    }

    return (
      <View style={styles.container}>
        <DateHeader date={new Date().toLocaleDateString()} />
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, displayName, type, ...rest } = metaInfo[key];
          const value = this.state[key];
          console.log('degerler : ' + displayName + ' - ' + value);
          return (
            <View key={key} style={styles.row}>
              {getIcon()}
              <Text>
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
    marginTop: 10,
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
