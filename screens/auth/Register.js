import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Platform,
    ScrollView,
    Dimensions,
    ImageBackground,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Button
} from 'react-native';
import firebase from 'firebase'
import { MaterialIcons } from '@expo/vector-icons';

const bgImage = require('../../src/assets/woman-with-mask.png');

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    static navigationOptions = {
        headerShown: false,
    };

    onSignUp() {
        const { email, password, name } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(
                () => { },
                (error) => {
                    Alert.alert(error.message);
                }
            );
    }


    render() {
        return (
            <ImageBackground source={bgImage} style={{ height: '100%', width: '100%' }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <KeyboardAvoidingView style={{ flex: 1 }}>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <ScrollView style={{ flex: 1, padding: 20 }}>
                                {/* SOME MESSAGE */}
                                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black', marginTop: 80, marginBottom: 40 }}>{'Create\nAccount'}</Text>

                                {/* FORM */}
                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                        marginTop: 20
                                    }}
                                    placeholder='Name'
                                    onChangeText={(name) => this.setState({ name })}
                                />

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                        marginTop: 30
                                    }}
                                    placeholder='E-mail'
                                    onChangeText={(email) => this.setState({ email })}
                                />

                                <TextInput
                                    style={{
                                        ...styles.inputStyle,
                                        marginTop: 10,
                                    }}
                                    placeholder='Password'
                                    secureTextEntry
                                    onChangeText={(password) => this.setState({ password })}
                                />

                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <TouchableOpacity
                                            style={{
                                                height: 70,
                                                width: 70,
                                                borderRadius: 40,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: 'rgba(0,0,0,0.7)',
                                            }}
                                            onPress={() => this.onSignUp()}
                                        >
                                            <MaterialIcons name={'arrow-forward'} size={30} color={'white'}
                                            >
                                            </MaterialIcons>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity style={{ ...styles.textBtn }} onPress={() => this.props.navigation.navigate("Login")}>
                                        <Text style={{ ...styles.textBtnLabel, fontWeight: 'bold', color: 'white' }}>Sign in</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        color: 'black',
        width: '100%',
        marginTop: 50,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        paddingBottom: 15,
    },
    textBtn: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        marginVertical: 50,
    },
    textBtnLabel: {
        color: 'white',
    },
});

export default Register