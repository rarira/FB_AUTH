import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, Button, FormInput } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-c17ec.cloudfunctions.net';

export default class SingInForm extends Component {
  state = { phone: '', code: '', };

  handleSubmit = async () => {
    const { phone, code } = this.state;

    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter the Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
            secureTextEntry
          />
        </View>
        <Button
          title='Submit'
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}
