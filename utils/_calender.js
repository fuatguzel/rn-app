import { AsyncStorage } from 'react-native';
import { getMetricMetaInfo, timeToString } from './helpers';

export const CALENDAR_STORAGE_KEY = 'rn-health:calendar';

function getRandomNumber(max) {
  return Math.floor(Math.random() * max) + 0;
}

async function setDummyData() {
  const {
    temperature,
    cough,
    dizziness,
    brethe,
    vomiting,
    tired,
    appetite,
  } = getMetricMetaInfo();

  let dummyData = {};
  const timestamp = Date.now();

  for (let i = -5; i < 0; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000;
    const strTime = timeToString(time);
    dummyData[strTime] =
      getRandomNumber(3) % 2 === 0
        ? {
            temperature: getRandomNumber(temperature.max),
            cough: getRandomNumber(cough.max),
            dizziness: getRandomNumber(dizziness.max),
            brethe: getRandomNumber(brethe.max),
            vomiting: getRandomNumber(vomiting.max),
            tired: getRandomNumber(tired.max),
            appetite: getRandomNumber(appetite.max),
          }
        : null;
  }

  await AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(dummyData));

  return dummyData;
}

function setMissingDates(dates) {
  const length = Object.keys(dates).length;
  const timestamp = Date.now();

  for (let i = -5; i < 0; i++) {
    const time = timestamp + i * 24 * 60 * 60 * 1000;
    const strTime = timeToString(time);

    if (typeof dates[strTime] === 'undefined') {
      dates[strTime] = null;
    }
  }

  return dates;
}

export function formatCalendarResults(results) {
  return results === null
    ? setDummyData()
    : setMissingDates(JSON.parse(results));
}
