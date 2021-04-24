import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
            <Text style={styles.text}>What is Corona?</Text>
          </View>
          <View style={styles.infoContainer}>
            <View style={[styles.infoBox, { backgroundColor: 'red' }]}>
              <Text style={styles.infoBoxText}>Deneme</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                //navigation.openDrawer();
              }}
              style={[
                styles.infoBox,
                { backgroundColor: 'rgba(52, 52, 52, 0.8)' },
              ]}
            >
              <Text style={styles.infoBoxText}>Deneme</Text>
            </TouchableOpacity>
            <View style={[styles.infoBox, { backgroundColor: 'red' }]}>
              <Text>Deneme</Text>
            </View>
            <View style={[styles.infoBox, { backgroundColor: 'red' }]}>
              <Text>Deneme</Text>
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
    fontSize: 24,
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
    marginTop: 350,
    marginVertical: 'auto',
  },
});
