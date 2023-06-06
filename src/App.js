/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);
  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  const gameOverHandler = numberOfRound => {
    setGameIsOver(true);
    setGuessRounds(numberOfRound);
  };
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        onStartNewGame={startNewGameHandler}
        userNumber={userNumber}
        roundsNumber={guessRounds}
      />
    );
  }

  return (
    <LinearGradient
      colors={['#0079FF', '#FFB84C', '#F6FA70']}
      style={styles.rootApp}>
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode="cover"
        style={styles.rootApp}
        imageStyle={styles.bgImage}>
        <SafeAreaView style={styles.rootApp}>{screen}</SafeAreaView>
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
