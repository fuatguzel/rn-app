import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
//import { Video, AVPlaybackStatus } from 'expo-av';
//import YouTube from 'react-native-youtube';

import { darkConflowerBlue } from '../constants/Colors';

export default function HandWashingScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
        source={require('../src/assets/handwashing-2.png')}
      />
      <Text>El Yıkama</Text>
      <View style={{ flexWrap: 'wrap' }}>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
      </View>
      {/* <YouTube
  videoId="KVZ-P-ZI6W4" // The YouTube video ID
  play // control playback of video with true/false
  fullscreen // control whether the video should play in fullscreen or inline
  loop // control whether the video should loop when ended
  onReady={e => this.setState({ isReady: true })}
  onChangeState={e => this.setState({ status: e.state })}
  onChangeQuality={e => this.setState({ quality: e.quality })}
  onError={e => this.setState({ error: e.error })}
  style={{ alignSelf: 'stretch', height: 300 }}
/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
