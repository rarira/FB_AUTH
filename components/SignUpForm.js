import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, Button, FormInput } from 'react-native-elements';

export default class SignUpForm extends Component {
  state = { phone: '' };

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

        <Button title="Submit" />
      </View>
    );
  }
}
