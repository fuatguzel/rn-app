import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import { darkConflowerBlue } from '../constants/Colors';

export default function MaskScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{
            marginTop: 25,
            width: 200,
            height: 200,
            resizeMode: 'contain',
          }}
          source={require('../src/assets/mask-2.png')}
        />
        <View
          style={{
            marginHorizontal: 15,
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Text>
            Masks are an additional step to help prevent people from getting and
            spreading COVID-19. They provide a barrier that keeps respiratory
            droplets from spreading. Wear a mask and take every day preventive
            actions in public settings.
          </Text>
          <Text style={styles.header}>
            Masks are a two-way street. Masks protect you and me.
          </Text>
          <Image
            style={{
              width: 200,
              height: 200,
              resizeMode: 'contain',
            }}
            source={require('../src/assets/masks-two-way-street.png')}
          />
          <Text>
            When we all wear masks, we take care of each other and everyone is
            protected.
          </Text>
          <Text style={styles.header}>How to Store and Wash Masks</Text>
          <Text>
            Store your cloth mask properly and wash it regularly to keep it
            clean. Consider having more than one mask on hand so that you can
            easily replace a dirty mask with a clean one. Make sure to remove
            your mask correctly and wash your hands after touching a used mask.
          </Text>
          <Text style={styles.header}>
            Two important ways to make sure your mask works the best it can
          </Text>
          <Text>
            - Make sure your mask fits snugly against your face. Gaps can let
            air with respiratory droplets leak in and out around the edges of
            the mask
          </Text>
          <Text>
            Pick a mask with layers to keep your respiratory droplets in and
            others’ out. A mask with layers will stop more respiratory droplets
            getting inside your mask or escaping from your mask if you are sick.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
