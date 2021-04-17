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
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Image
            style={{ width: 25, height: 25, marginLeft: 5 }}
            source={require('../../src/assets/icons/back.png')}
            resizeMode="contain"
          />
          <Text>Back</Text>
        </TouchableOpacity>
        <Input
          placeholder="E-mail"
          value={this.state.email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <Button title="Reset password" onPress={this.handleResetPassword} />
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
