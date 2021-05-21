import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
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
  Alert,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import firebase from 'firebase';
import {
  color2,
  color3,
  color1,
  color4,
  darkyellow,
} from '../../constants/Colors';
import { firestore } from '../../firebase';

const bgImage = require('../../src/assets/WinningCoronavirus.gif');

export class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };

    this.onSignUp = this.onSignIn.bind(this);
  }

  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {},
        (error) => {
          Alert.alert(error.message);
        },
      );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}
            >
              <Image
                source={bgImage}
                style={{
                  height: 250,
                  width: 250,
                  flex: 1,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginTop: 25,
                }}
              />
              <Text
                style={{
                  fontSize: 40,
                  color: '#957fef',
                  fontWeight: 'bold',
                  marginVertical: 20,
                }}
              >
                {'Welcome\nBack'}
              </Text>

              {/* FORM */}
              <TextInput
                style={{
                  ...styles.inputStyle,
                }}
                placeholder="Email"
                onChangeText={(email) => this.setState({ email })}
              />

              <TextInput
                style={{
                  ...styles.inputStyle,
                  marginTop: 50,
                }}
                placeholder="Password"
                secureTextEntry
                onChangeText={(password) => this.setState({ password })}
              />

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 5 }}>
                  <TouchableOpacity
                    style={{
                      height: 70,
                      width: 70,
                      borderRadius: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                    }}
                  >
                    <MaterialIcons
                      name={'arrow-forward'}
                      size={30}
                      color={'white'}
                      onPress={() => this.onSignIn()}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  style={{ ...styles.textBtn }}
                  onPress={() => this.props.navigation.navigate('Register')}
                >
                  <Text
                    style={{
                      ...styles.textBtnLabel,
                      color: '#d0f4de',
                      fontWeight: 'bold',
                    }}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                  <TouchableOpacity
                    style={{ ...styles.textBtn }}
                    onPress={() =>
                      this.props.navigation.navigate('ForgotPassword')
                    }
                  >
                    <Text
                      style={{
                        ...styles.textBtnLabel,
                        color: '#dee2ff',
                        fontWeight: 'bold',
                      }}
                    >
                      Forgot Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    color: 'black',
    width: '100%',
    marginTop: 50,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.5,
    paddingBottom: 15,
    height: 50,
  },
  textBtn: {
    marginVertical: 50,
  },
  textBtnLabel: {
    color: color4,
  },
});

export default Login;
