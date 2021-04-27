import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Video,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { width, height } from '../constants/Layout';
import CustomHeader from '../components/CustomHeader';
import QuizBtn from '../components/QuizBtn';
import HomeDetail from './HomeDetail';

import { darkConflowerBlue } from '../constants/Colors';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomHeader title="" isHome={true} navigation={navigation} />
        <View style={styles.headerContainer}>
          <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>
            1/14
          </Text>
          <StatusBar style="auto" />
        </View>
        <View>
          <View style={styles.spaces}>
            <Text style={styles.text}>How to protect yourself ?</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoBoxText}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('HomeDetail');
                }}
                style={styles.infoBox}
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
              style={styles.infoBox}
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
                style={styles.infoBox}
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
                style={styles.infoBox}
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
            <QuizBtn nav={navigation} />
          </View>
        </View>
      </View>
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
    backgroundColor: darkConflowerBlue,
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBoxText: {
    color: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
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
    marginTop: 375,
    marginVertical: 'auto',
  },
});
