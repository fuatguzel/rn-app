import React from 'react';
import { View, Image } from 'react-native';

export function getDailyReminderValue() {
  return {
    today: "👋 Don't forget to log your data today!",
  };
}

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
          <View>
            <Image
              source={require('../src/assets/high-temperature.png')}
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
          <View>
            <Image
              source={require('../src/assets/cough.png')}
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
          <View>
            <Image
              source={require('../src/assets/dizziness.png')}
              name="dizziness"
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
          <View>
            <Image
              source={require('../src/assets/exhausted-man.png')}
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
          <View>
            <Image
              source={require('../src/assets/lack-of-appetite.png')}
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
