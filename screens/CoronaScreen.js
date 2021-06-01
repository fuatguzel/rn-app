import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, RefreshControl, Image } from 'react-native';

import { base_url, daily_url } from '../constants/config';
import CustomHeader from '../components/CustomHeader';
import {
  color1,
  color2,
  color3,
  color4,
  darkConflowerBlue,
} from '../constants/Colors';
import { Spinner } from 'native-base';
import { ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';

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
  const [totalConfirmed, setTotalConfirmed] = React.useState(0);
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
      setTotalConfirmed(result.confirmed.value);
      setLoading(true);
    }
  }

  return (
    <View style={styles.headerContainer}>
      <CustomHeader title="" isHome={true} navigation={navigation} />
      <View
        style={{
          flex: 0.85,
          backgroundColor: color4,
          borderTopLeftRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          height: 150,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            color: '#fff',
            fontWeight: 'bold',
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
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Country : Turkey
            </Text>
            <Image
              style={{
                marginLeft: 20,
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
              source={require('../src/assets/turkey.png')}
            />
          </View>
          <View style={styles.thirdContainer}>
            <Image
              style={{
                marginRight: 20,
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
              source={require('../src/assets/confirmed.png')}
            />
            <Text style={styles.textCenter}>
              Total Confirmed : {totalConfirmed}
            </Text>
          </View>
          <View style={styles.sixthContainer}>
            <Image
              style={{
                marginRight: 20,
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
              source={require('../src/assets/recovered.png')}
            />
            <Text style={styles.textCenter}>
              Total recovered : {totalRecovered}
            </Text>
          </View>
          <View style={styles.secondContainer}>
            <Image
              style={{
                marginRight: 20,
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
              source={require('../src/assets/death.png')}
            />
            <Text style={styles.textCenter}>Total Deaths : {totalDeaths}</Text>
          </View>
          <View style={styles.fifthContainer}>
            <Image
              style={{
                marginRight: 20,
                width: 50,
                height: 50,
                resizeMode: 'contain',
              }}
              source={require('../src/assets/vaccine.png')}
            />
            <Text style={styles.textCenter}>Total Vaccine : 26.731.126</Text>
          </View>
          {/* <View style={styles.fifthContainer}>
            <Text style={styles.textCenter}>{totalDeaths}</Text>
          </View> */}
        </ScrollView>
      ) : (
        <Spinner color={color4} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  headerContainer: {
    flex: 1,
    padding: 34,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    marginTop: 35,
    height: 50,
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color3,
    marginTop: 35,
  },
  thirdContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color2,
    marginTop: 35,
  },
  fourthContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color1,
    marginTop: 35,
  },
  fifthContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fccd04',
    marginTop: 35,
    borderBottomRightRadius: 100,
  },
  sixthContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bee4af',
    marginTop: 35,
  },
  header: {},
});
