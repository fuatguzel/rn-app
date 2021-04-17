import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const CustomHeader = ({ title, isHome, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    isHome ?
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../src/assets/icons/menu.png')}
                                resizeMode='contain'
                            />
                        </TouchableOpacity> :
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                style={{ width: 25, height: 25, marginLeft: 5 }}
                                source={require('../src/assets/icons/back.png')}
                                resizeMode='contain'
                            />
                            <Text>Back</Text>
                        </TouchableOpacity>
                }

            </View>
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                {/* <Image
                    style={{ width: 100, height: 300 }}
                    source={require('../img/icons/marvel-logo.png')}
                    resizeMode='contain'
                /> */}
                <Text>{title}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View >
    )
}

export default CustomHeader
