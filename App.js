import React, { Component } from 'react';
import { View } from 'react-native';

import { ActivityIndicator, AppRegistry, StyleSheet, Text } from 'react-native'


export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>

        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />

      </View>
    );
  }
};
