import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';

import { darkConflowerBlue } from '../constants/Colors';

export default function MaskScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
        }}
        source={require('../src/assets/mask-2.png')}
      />
      <Text>Maske</Text>
      <View style={{ flexWrap: 'wrap' }}>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
        <Text>Maske kullanımı çok önemlidir.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
