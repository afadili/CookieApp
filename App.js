/**
Amina FADILI 
Copyright 2018
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Ma future application : Cookie !</Text>
        <Text style={styles.instructions}>ça va être Super !</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={{ fontFamily: 'Iowan Old Style' }}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19CBC6',
    fontFamily: 'Montserrat-Black'
  },
  welcome: {
    fontFamily: 'Montserrat-Black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#000000'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Montserrat-Black'
  },
});
