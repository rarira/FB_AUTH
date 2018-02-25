import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDrjYjVqQwD3geJ2jFYXb3uXZgNq3Wm0Ao",
      authDomain: "one-time-password-c17ec.firebaseapp.com",
      databaseURL: "https://one-time-password-c17ec.firebaseio.com",
      projectId: "one-time-password-c17ec",
      storageBucket: "one-time-password-c17ec.appspot.com",
      messagingSenderId: "592949791926"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
