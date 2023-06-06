import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Title from '../../components/ui/Title';
import NumberContainer from '../../components/game/NumberContainer';
import PrimaryButton from '../../components/ui/PrimaryButton';
import Card from '../../components/ui/Card';
import Colors from '../../utils/colors';

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess]);
  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert('Dont lie', 'you know that is wrong', [
        {text: 'sorry', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurrentGuess(newRndNumber);
  };

  //higher
  return (
    <View style={styles.screen}>
      <Title>Opponest Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.text}>Higher or Lower ?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  text: {color: Colors.primary500, fontSize: 24},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
