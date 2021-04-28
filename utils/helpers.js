import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export function getDailyReminderValue() {
  return {
    today: "👋 Don't forget to log your data today!",
  };
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 5,
    borderRadius: 8,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});

export function getMetricMetaInfo(metric) {
  const info = {
    temperature: {
      displayName: 'Temperature',
      max: 10,
      unit: 'level',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#e9ecf3' }]}>
            <Image
              source={require('../src/assets/high-temperature-64.png')}
              name="high-temperature"
              width={32}
              height={32}
            />
          </View>
        );
      },
    },
    cough: {
      displayName: 'Cough',
      max: 10,
      unit: 'level',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#DBB3D7' }]}>
            <Image
              source={require('../src/assets/cough-64.png')}
              name="cough"
              width={32}
              height={32}
            />
          </View>
        );
      },
    },
    dizziness: {
      displayName: 'Dizziness',
      max: 10,
      unit: 'level',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#fccd04' }]}>
            <Image
              source={require('../src/assets/dizziness-64.png')}
              name="dizziness"
              width={32}
              height={32}
            />
          </View>
        );
      },
    },
    brethe: {
      displayName: 'Brethe',
      max: 10,
      unit: 'level',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#84ceeb' }]}>
            <Image
              source={require('../src/assets/bad-breath-64.png')}
              name="brethe"
              width={32}
              height={32}
            />
          </View>
        );
      },
    },
    vomiting: {
      displayName: 'Vomiting',
      max: 10,
      unit: 'level',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#f64c72' }]}>
            <Image
              source={require('../src/assets/vomiting-64.png')}
              name="vomiting"
              width={32}
              height={32}
            />
          </View>
        );
      },
    },
    tired: {
      displayName: 'Tired',
      max: 10,
      unit: 'level',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#c1c8e4' }]}>
            <Image
              source={require('../src/assets/tired-64.png')}
              name="tired"
              width={32}
              height={32}
            />
          </View>
        );
      },
    },
    appetite: {
      displayName: 'Appetite',
      max: 10,
      unit: 'level',
      step: 1,
      type: 'slider',
      getIcon() {
        return (
          <View style={[styles.iconContainer, { backgroundColor: '#f172a1' }]}>
            <Image
              source={require('../src/assets/lack-of-appetite-64.png')}
              name="appetite"
              width={32}
              height={32}
            />
          </View>
        );
      },
    },
  };

  return typeof metric === 'undefined' ? info : info[metric];
}

export function timeToString(time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );
  return todayUTC.toISOString().split('T')[0];
}
