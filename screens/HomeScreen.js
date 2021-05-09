import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { width, height } from '../constants/Layout';
import CustomHeader from '../components/CustomHeader';
import QuizBtn from '../components/QuizBtn';
import EmergencyBtn from '../components/EmergencyBtn';
import HomeDetail from './HomeDetail';

import FlashMessage from 'react-native-flash-message';

//import Midnight from 'react-native-midnight';

import { darkConflowerBlue } from '../constants/Colors';

export default function HomeScreen({ navigation }) {
  let day = 0;
  day = new Date().getDate();
  // React.useEffect(() => {
  //   const listener = Midnight.addListener(() => {
  //     Alert.alert('The day has changed');
  //   });
  //   return () => listener.remove();
  // }, []);

  return (
    // style={{ flex: 1 }}
    <SafeAreaView>
      <View style={styles.container}>
        <CustomHeader title="" isHome={true} navigation={navigation} />
        <View style={styles.headerContainer}>
          <Text
            style={{
              color: darkConflowerBlue,
              fontSize: 34,
              fontWeight: 'bold',
            }}
          >
            {day < 15 ? day : 1}/14
          </Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <View style={styles.spaces}>
            <Text style={styles.text}>- How to protect yourself ?</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoBoxText}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('HomeDetail');
                }}
                style={[styles.infoBox, { backgroundColor: '#ffb48f' }]}
              >
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    resizeMode: 'contain',
                  }}
                  source={require('../src/assets/mask-pana.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeDetail');
              }}
              style={[styles.infoBox, { backgroundColor: '#bee4af' }]}
            >
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: 'contain',
                }}
                source={require('../src/assets/Handwashing-amico.png')}
              />
            </TouchableOpacity>
            <View style={styles.infoBox}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('HomeDetail');
                }}
                style={[styles.infoBox, { backgroundColor: '#fccd04' }]}
              >
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    resizeMode: 'contain',
                  }}
                  source={require('../src/assets/Social-Distancing-amico.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.infoBox}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('HomeDetail');
                }}
                style={[styles.infoBox, { backgroundColor: '#c1c8e4' }]}
              >
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    resizeMode: 'contain',
                  }}
                  source={require('../src/assets/Vaccine-pana.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.marginAndRound}>
            <EmergencyBtn />
          </View>
          <View style={{ marginTop: 120 }}>
            <QuizBtn nav={navigation} />
          </View>
        </View>
      </View>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  headerContainer: {
    flex: 1,
    borderRadius: 34,
    backgroundColor: '#d1d7e0',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: darkConflowerBlue,
  },
  infoBoxText: {
    color: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.6)',
  },
  spaces: {
    paddingTop: 23,
    paddingBottom: 50,
  },
  infoContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    marginBottom: 25,
    width: 150,
    height: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34,
  },
  marginAndRound: {
    marginTop: 355,
    marginHorizontal: 'auto',
    marginVertical: 'auto',
  },
});
