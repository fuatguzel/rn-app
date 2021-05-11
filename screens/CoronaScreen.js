import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, RefreshControl } from 'react-native';

import { base_url, daily_url } from '../constants/config';
import CustomHeader from '../components/CustomHeader';
import { darkConflowerBlue } from '../constants/Colors';
import { Spinner } from 'native-base';
import { ScrollView } from 'react-native';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default function CoronaScreen({ navigation }) {
  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [totalDeaths, setTotalDeaths] = React.useState(0);
  const [totalRecovered, setTotalRecovered] = React.useState(0);
  const [dailyDeaths, setDailyDeaths] = React.useState(0);
  const [dailyRecovered, setDailyRecovered] = React.useState(0);
  React.useEffect(() => {
    getCases();
    getDailyCases();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      setRefreshing(false);
    });
  }, [refreshing]);

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
      setLoading(true);
    }
  }

  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          flex: 0.25,
          backgroundColor: 'yellow',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            color: '#ddd',
          }}
        >
          Covid-19 Datas
        </Text>
      </View>
      {loading ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.container}>
            <Text>{totalDeaths}</Text>
          </View>
          <View style={styles.secondContainer}>
            <Text>{totalDeaths}</Text>
          </View>
        </ScrollView>
      ) : (
        <Spinner />
      )}
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
    backgroundColor: 'green',
  },
  secondContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'red',
  },
  header: {},
});
