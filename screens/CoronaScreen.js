import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

import { base_url, daily_url } from '../constants/config';
import CustomHeader from '../components/CustomHeader';
import { darkConflowerBlue } from '../constants/Colors';

export default function CoronaScreen({ navigation }) {
  const [totalDeaths, setTotalDeaths] = React.useState(0);
  const [totalRecovered, setTotalRecovered] = React.useState(0);
  const [dailyDeaths, setDailyDeaths] = React.useState(0);
  const [dailyRecovered, setDailyRecovered] = React.useState(0);
  React.useEffect(() => {
    getCases();
    getDailyCases();
  }, []);

  async function getDailyCases() {
    let response = await fetch(daily_url);

    if (response.status == 200) {
      let result = await response.json();

      let tr = result.filter((c) => c.countryRegion == 'Turkey');
      setDailyDeaths(tr[0].deaths);
      setDailyRecovered(tr[0].recovered);

      // setData(result, () => {
      //   setForceListRerender(!forceListRerender);
      // });
    }
  }

  async function getCases() {
    let response = await fetch(base_url + '/' + 'turkey');

    if (response.status == 200) {
      let result = await response.json();
      setTotalRecovered(result.recovered.value);
      setTotalDeaths(result.deaths.value);
    }
  }

  return (
    <View style={styles.headerContainer}>
      <View style={styles.container}>
        <Text>Total Turkey Cases</Text>
        <Text>Total Deaths : {totalDeaths}</Text>
        <Text>Total Recovered : {totalRecovered}</Text>
      </View>
      <View style={styles.container}>
        <Text>Daily Turkey Cases</Text>
        <Text>Daily Deaths : {dailyDeaths}</Text>
        <Text>Daily Recovered : {dailyRecovered}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    padding: 34,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
