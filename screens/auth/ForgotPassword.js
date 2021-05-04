import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';
import { color4 } from '../../constants/Colors';

export class ForgotPassword extends Component {
  state = {
    email: '',
  };

  handleResetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(
        () => {
          Alert.alert('Password reset e-mail has been sent');
        },
        (error) => {
          Alert.alert(error.message);
        },
      );
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#293882',
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            height: 45,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={this.handleResetPassword}
        >
          <Text style={{ color: '#fff' }}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: color4,
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            height: 45,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={{ color: 'black' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ForgotPassword;
