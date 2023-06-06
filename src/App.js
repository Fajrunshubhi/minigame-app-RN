/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient
      colors={['#0079FF', '#FFB84C', '#F6FA70']}
      style={styles.rootApp}>
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode="cover"
        style={styles.rootApp}
        imageStyle={styles.bgImage}>
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootApp: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.5,
  },
});

export default App;
