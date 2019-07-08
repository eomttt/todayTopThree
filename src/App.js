import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Provider } from 'react-redux';
import Firebase from 'react-native-firebase';

import create from './store';
import Header from './components/Top/Header';
import AppContainer from './utils/navigator';

const store = create();

global.PUBLIC_MODE = true;

export default class App extends Component {
  componentDidMount() {
      Firebase.messaging().requestPermission();
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({

});
