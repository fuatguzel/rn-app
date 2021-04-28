import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ title, isHome, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', height: 50 }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={32} color="rgba(0, 0, 0, 0.5)" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'flex-end' }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 20, height: 20, marginLeft: 15, marginTop: 15 }}
              source={require('../src/assets/icons/back.png')}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}
      >
        {/* <Image
                    style={{ width: 100, height: 300 }}
                    source={require('../img/icons/marvel-logo.png')}
                    resizeMode='contain'
                /> */}
        <Text>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

export default CustomHeader;
